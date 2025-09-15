package com.sebas.backend.usersapp.backend_usersapp.auth;

import javax.crypto.SecretKey;

import io.jsonwebtoken.Jwts;

public class TokenJwtConfig {

    // public final static String SECRET_KEY = "any_token_with_some_secret_phrase";
    public final static SecretKey SECRET_KEY = Jwts.SIG.HS384.key().build();
    public final static String PREFIX_TOKEN = "Bearer ";
    public final static String AUTHORIZATION_HEADER = "Authorization";
    

}
