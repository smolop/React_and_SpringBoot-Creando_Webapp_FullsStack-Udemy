package com.sebas.backend.usersapp.backend_usersapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sebas.backend.usersapp.backend_usersapp.models.enitties.User;

public interface UserRepository extends JpaRepository<User, Long> {

    

}
