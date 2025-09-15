package com.sebas.backend.usersapp.backend_usersapp.auth.filters;

import java.io.IOException;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sebas.backend.usersapp.backend_usersapp.auth.SimpleGrantedAuthorityJsonCreator;
import com.sebas.backend.usersapp.backend_usersapp.auth.TokenJwtConfig;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.lang.Arrays;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtValidationFilter extends BasicAuthenticationFilter {

    public JwtValidationFilter(AuthenticationManager authenticationManager) {
        super(authenticationManager);
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        
                String authorizationHeader = request.getHeader(TokenJwtConfig.AUTHORIZATION_HEADER);

                if (authorizationHeader == null || !authorizationHeader.startsWith(TokenJwtConfig.PREFIX_TOKEN)) {
                    chain.doFilter(request, response);
                    return;
                }

                String token = authorizationHeader.replace(TokenJwtConfig.PREFIX_TOKEN, "");

                // Old way without JWT
                /* byte[] tokenDecodeBytes = Base64.getDecoder().decode(token);
                String tokenDecode = new String(tokenDecodeBytes);

                String[] tokenArray = tokenDecode.split(":");
                String secret = tokenArray[0];
                String username = tokenArray[1]; */

                try { 
                    Claims claims = Jwts.parser()
                    .verifyWith(TokenJwtConfig.SECRET_KEY)
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();

                    Object authoritiesClaims = claims.get("authorities");
                    String username = claims.getSubject();
                    Object username2 = claims.get("username");
                    System.out.println("USERNAME: " + username);
                    System.out.println("USERNAME2: " + username2);

                    // Old way
                    /* List<GrantedAuthority> authorities = new ArrayList<>();
                    authorities.add(new SimpleGrantedAuthority("ROLE_USER")); */

                    Collection<? extends GrantedAuthority> authorities = Arrays.asList(new ObjectMapper()
                    .addMixIn(SimpleGrantedAuthority.class, SimpleGrantedAuthorityJsonCreator.class)
                    .readValue(authoritiesClaims.toString().getBytes(), SimpleGrantedAuthority[].class));
                    
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(username, null, authorities);

                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                    chain.doFilter(request, response);
                } catch (JwtException jwtException) {
                    Map<String, String> body = new HashMap<>();
                    body.put("error", jwtException.getMessage());
                    body.put("message", "Invalid JWT token");

                    response.getWriter().write(new ObjectMapper().writeValueAsString(body));
                    response.setStatus(HttpStatus.UNAUTHORIZED.value());
                    response.setContentType(MediaType.APPLICATION_JSON_VALUE);
                }
    }

    

}
