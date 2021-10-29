package com.example.project.regLogin;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class AppUserService {


    private static AppUserRepository appUserRepository;

    @Autowired
    public  AppUserService(AppUserRepository appUserRepository) {
        AppUserService.appUserRepository = appUserRepository;
    }

    public static List<AppUser> getTankHT() {
        return appUserRepository.findAll();
    }



    public static void addNewUser(AppUser appUser) {

       appUserRepository.save(appUser);

    }


    public static List<AppUser> getTankRadii() {
        return appUserRepository.findAll();
    }
}
