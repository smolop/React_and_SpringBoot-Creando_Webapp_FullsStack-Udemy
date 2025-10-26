package com.sebas.backend.usersapp.backend_usersapp.models.request;

import com.sebas.backend.usersapp.backend_usersapp.models.IUser;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRequest implements IUser{

    @NotBlank
    @Size(min = 4, max = 8)
    private String username;
    
    @NotEmpty
    @Email
    private String email;

    private boolean admin;

    @Override
    public boolean isAdmin() {
        return admin;
    }
    
}