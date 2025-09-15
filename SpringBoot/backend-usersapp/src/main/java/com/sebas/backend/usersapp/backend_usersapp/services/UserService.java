package com.sebas.backend.usersapp.backend_usersapp.services;

import java.util.List;
import java.util.Optional;

import com.sebas.backend.usersapp.backend_usersapp.models.dto.UserDto;
import com.sebas.backend.usersapp.backend_usersapp.models.enitties.User;
import com.sebas.backend.usersapp.backend_usersapp.models.request.UserRequest;

public interface UserService {

    List<UserDto> findAllUsers();

    Optional<UserDto> findUserById(Long id);

    UserDto saveUser(User user);

    Optional<UserDto> updateUser(Long id, UserRequest user);

    void removeUserById(Long id);

}
