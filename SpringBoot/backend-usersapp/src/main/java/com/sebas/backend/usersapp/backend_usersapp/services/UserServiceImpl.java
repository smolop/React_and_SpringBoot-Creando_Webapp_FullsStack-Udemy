package com.sebas.backend.usersapp.backend_usersapp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sebas.backend.usersapp.backend_usersapp.models.IUser;
import com.sebas.backend.usersapp.backend_usersapp.models.dto.UserDto;
import com.sebas.backend.usersapp.backend_usersapp.models.dto.mapper.UserDtoMapper;
import com.sebas.backend.usersapp.backend_usersapp.models.enitties.Role;
import com.sebas.backend.usersapp.backend_usersapp.models.enitties.User;
import com.sebas.backend.usersapp.backend_usersapp.models.request.UserRequest;
import com.sebas.backend.usersapp.backend_usersapp.repositories.RoleRepository;
import com.sebas.backend.usersapp.backend_usersapp.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    @Transactional(readOnly = true)
    public List<UserDto> findAllUsers() {
        List<User> users = userRepository.findAll();

        return users.stream()
                .map(user -> UserDtoMapper
                        .builder()
                        .setUser(user)
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<UserDto> findUserById(Long id) {
        return userRepository.findById(id)
                .map(user -> UserDtoMapper
                        .builder()
                        .setUser(user)
                        .build());

    }

    @Override
    @Transactional
    public UserDto saveUser(User user) {
        String passwordBc = passwordEncoder.encode(user.getPassword());
        user.setPassword(passwordBc);

        user.setRoles(getUserRoles(user));

        return UserDtoMapper
                .builder()
                .setUser(userRepository.save(user))
                .build();
    }

    private List<Role> getUserRoles(IUser user) {
        List<Role> roles = new ArrayList<>();
        Optional<Role> userRoleOptional = roleRepository.findByName("ROLE_USER");

        if (userRoleOptional.isPresent())
            roles.add(userRoleOptional.orElseThrow());

        if (user.isAdmin()) {
            Optional<Role> adminRoleOptional = roleRepository.findByName("ROLE_ADMIN");
            if (adminRoleOptional.isPresent()) {
                roles.add(adminRoleOptional.orElseThrow());
            }
        }
        return roles;
    }

    @Override
    @Transactional
    public Optional<UserDto> updateUser(Long id, UserRequest user) {
        Optional<User> userOptional = userRepository.findById(id);
        User updatedUser = null;
        if (userOptional.isPresent()) {

            User userToUpdate = userOptional.orElseThrow();
            userToUpdate.setRoles(getUserRoles(user));
            userToUpdate.setUsername(user.getUsername());
            userToUpdate.setEmail(user.getEmail());
            updatedUser = userRepository.save(userToUpdate);
        }
        return Optional
                .ofNullable(
                        UserDtoMapper
                                .builder()
                                .setUser(updatedUser)
                                .build());
    }

    @Override
    @Transactional
    public void removeUserById(Long id) {
        userRepository.deleteById(id);
    }

}
