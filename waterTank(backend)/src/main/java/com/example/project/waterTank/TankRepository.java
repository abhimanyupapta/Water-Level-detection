package com.example.project.waterTank;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TankRepository extends JpaRepository<WaterTank, Long> {
}
