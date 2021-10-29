package com.example.project.waterTank;


import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class TankConfig {

    @Bean
    CommandLineRunner commandLineRunner(TankRepository repository) {
       return args -> {
           repository.saveAll(
                   List.of()
           );
       };
    }
}
