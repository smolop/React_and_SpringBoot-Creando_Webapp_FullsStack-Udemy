package com.sebas.backend.usersapp.backend_usersapp.models.dto.mapper;

import com.sebas.backend.usersapp.backend_usersapp.models.dto.UserDto;
import com.sebas.backend.usersapp.backend_usersapp.models.enitties.User;

import lombok.Setter;

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
        UserDto userDto = new UserDto(this.user.getId(), this.user.getUsername(), this.user.getEmail());
        return userDto;
    }
    

}
