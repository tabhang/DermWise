package org.system.health.Service;


import org.system.health.Entity.User;

public interface UserService {

    int signUp(User user);

    String login(String email, String password);
}
