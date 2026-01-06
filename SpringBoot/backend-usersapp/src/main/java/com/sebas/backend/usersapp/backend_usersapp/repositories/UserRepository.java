package com.sebas.backend.usersapp.backend_usersapp.repositories;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sebas.backend.usersapp.backend_usersapp.models.enitties.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

   Optional<User> findByUsername(String username);

   @Query("select u from User u where u.username=:username")
   Optional<User> getUserByUsername(String username);

   Page<User> findAll(Pageable pageable);

}
