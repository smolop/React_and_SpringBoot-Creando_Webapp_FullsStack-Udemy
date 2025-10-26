package com.sebas.backend.usersapp.backend_usersapp.models.dto.mapper;

import com.sebas.backend.usersapp.backend_usersapp.models.dto.UserDto;
import com.sebas.backend.usersapp.backend_usersapp.models.enitties.User;

public class UserDtoMapper {

    private User user;

    private UserDtoMapper () {}

    public static UserDtoMapper builder() {
        return new UserDtoMapper();
    }

    public UserDtoMapper setUser(User user) {
        this.user = user;
        return this;
    }

    public UserDto build() {
        if (user == null)
        throw new RuntimeException("You should pass the user entity");
        boolean isAdmin = user.getRoles().stream().anyMatch(rol -> "ROLE_ADMIN".equals(rol.getName()));
        UserDto userDto = new UserDto(this.user.getId(), this.user.getUsername(), this.user.getEmail(), isAdmin);
        return userDto;
    }

}
