package org.system.health.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.system.health.Entity.User;
import org.system.health.Repository.UserRepository;

import java.util.Optional;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public int signUp(User user) {
        Optional<User> userInDb = userRepository.findByEmail(user.getEmail());
        if (userInDb.isPresent()) {
            return 226;
        }
        user.setUuid(String.valueOf(UUID.randomUUID()));
        userRepository.save(user);
        return 201;
    }

    @Override
    public String login(String email, String password) {
        Optional<User> user = userRepository.findByEmailAndPassword(email, password);
        if (user.isEmpty()) {
            return "404";
        }
        return user.get().getUuid();
    }
}
