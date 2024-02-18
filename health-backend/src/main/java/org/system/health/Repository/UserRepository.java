package org.system.health.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.system.health.Entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmailAndPassword(String email, String password);
    Optional<User> findByEmail(String email);
    Optional<User> findByUuid(String uuid);
}
