package com.example.project.waterTank;


import com.example.project.regLogin.AppUser;
import com.example.project.regLogin.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Controller
@RequestMapping(path = "waterTank")
public class TankController {

    private final TankService tankService;

    private final AppUserService appUserService;


    @Autowired
    public TankController(TankService tankService,  AppUserService appUserService) {
        this.tankService = tankService;


        this.appUserService = appUserService;
    }

    @GetMapping(path= "getVol")
    public List<WaterTank> getVolume() {
       return TankService.getVolume();
    }

    @GetMapping(path = "getTankHT")
    public List<AppUser> getTankHT() { return AppUserService.getTankHT(); }

    @GetMapping(path = "getTankRadii")
    public List<AppUser> getTankRadii() { return AppUserService.getTankRadii(); }


    @PostMapping(path = "vol")
    public void registerNewVolume(@RequestBody WaterTank tank) {
        TankService.addNewVolume(tank);
    }

    @PostMapping(path = "addNew")
    public void registerNewUser(@RequestBody AppUser appUser) {
        AppUserService.addNewUser(appUser);
    }
}
