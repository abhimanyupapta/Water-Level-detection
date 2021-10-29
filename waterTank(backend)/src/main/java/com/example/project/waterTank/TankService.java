package com.example.project.waterTank;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TankService {
    private static TankRepository tankRepository;

    @Autowired
    public TankService(TankRepository tankRepository) {this.tankRepository = tankRepository;}

    public static List<WaterTank> getVolume() {
        return tankRepository.findAll();
    }

    public static void addNewVolume(WaterTank tank) {
        tankRepository.save(tank);
    }
}
