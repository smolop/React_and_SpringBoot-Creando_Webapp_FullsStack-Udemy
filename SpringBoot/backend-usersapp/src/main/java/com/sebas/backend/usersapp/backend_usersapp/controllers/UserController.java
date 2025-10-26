package com.sebas.backend.usersapp.backend_usersapp.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sebas.backend.usersapp.backend_usersapp.models.dto.UserDto;
import com.sebas.backend.usersapp.backend_usersapp.models.enitties.User;
import com.sebas.backend.usersapp.backend_usersapp.models.request.UserRequest;
import com.sebas.backend.usersapp.backend_usersapp.services.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin(origins = {"http://localhost:5173"})
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping()
    public List<UserDto> usersList() {
        return userService.findAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> showUserById(@PathVariable("id") Long id) {
        Optional<UserDto> userOptional = userService.findUserById(id);
        if (userOptional.isPresent()) {
            return ResponseEntity.ok(userOptional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    @Transactional
    public ResponseEntity<?> createUser(@Valid @RequestBody User user, BindingResult result) {
        if (result.hasErrors()) {
            return validationErros(result);        
        }

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(userService.saveUser(user));
    };

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<?> updateUser(@PathVariable("id") Long id, @Valid @RequestBody UserRequest user, BindingResult result) {
        if (result.hasErrors()) { 
            return validationErros(result);
        }

        Optional<UserDto> userOptional = userService.updateUser(id, user);
        if (userOptional.isPresent()) {
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(userOptional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeUser(@PathVariable("id") Long id) {
         Optional<UserDto> userOptional = userService.findUserById(id);
         if (userOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
         }
        userService.removeUserById(id);
        return ResponseEntity.noContent().build();
    }

    private ResponseEntity<?> validationErros(BindingResult result) {
        Map<String, String> errors = new HashMap<>();

        result.getFieldErrors().forEach(err -> {
            errors.put(err.getField(), "The field " + err.getField() + " " + err.getDefaultMessage());
        });

        return ResponseEntity.badRequest().body(errors);
    }
}
