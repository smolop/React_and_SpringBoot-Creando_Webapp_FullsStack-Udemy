package com.sebas.backend.usersapp.backend_usersapp.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sebas.backend.usersapp.backend_usersapp.models.enitties.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

   Optional<Role> findByName(String name);

}
