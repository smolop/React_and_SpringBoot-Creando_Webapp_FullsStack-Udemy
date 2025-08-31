package com.sebas.backend.usersapp.backend_usersapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sebas.backend.usersapp.backend_usersapp.models.enitties.User;
import com.sebas.backend.usersapp.backend_usersapp.models.request.UserRequest;
import com.sebas.backend.usersapp.backend_usersapp.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<User> findUserById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    @Transactional
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    @Transactional
    public Optional<User> updateUser(Long id, UserRequest user) {
        Optional<User> userOptional = this.findUserById(id);
        User userToUpdate = null;
        if (userOptional.isPresent()) {
            userToUpdate = userOptional.orElseThrow();
            userToUpdate.setUsername(user.getUsername());
            userToUpdate.setEmail(user.getEmail());
            return Optional.of(this.saveUser(userToUpdate));
        }
        return Optional.ofNullable(userToUpdate);
    }

    @Override
    @Transactional
    public void removeUserById(Long id) {
        userRepository.deleteById(id);
    }

}
