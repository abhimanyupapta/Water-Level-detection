package com.example.project.regLogin;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository

public interface AppUserRepository extends JpaRepository<AppUser, Long> {




}
