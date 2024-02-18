package org.system.health.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.system.health.Entity.User;
import org.system.health.Service.UserService;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/api/signup")
    public ResponseEntity<User> signUp(@RequestBody User user) {
        int status = userService.signUp(user);
        if (status == 226)
            return new ResponseEntity<>(HttpStatus.IM_USED);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("api/login")
    public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password) {
        String response = userService.login(username, password);
        if (response == "404"){
            return new ResponseEntity<>("User Not Found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
