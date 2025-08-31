package com.sebas.backend.usersapp.backend_usersapp.services;

import java.util.List;
import java.util.Optional;

import com.sebas.backend.usersapp.backend_usersapp.models.enitties.User;
import com.sebas.backend.usersapp.backend_usersapp.models.request.UserRequest;

public interface UserService {

    List<User> findAllUsers();

    Optional<User> findUserById(Long id);

    User saveUser(User user);

    Optional<User> updateUser(Long id, UserRequest user);

    void removeUserById(Long id);

}
