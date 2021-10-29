package com.example.project.regLogin;


import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import javax.persistence.*;





@Entity
@Getter
@Setter

@NoArgsConstructor
@Table
public class AppUser  {


    @SequenceGenerator(
            name = "name_sequence",
            sequenceName = "name_sequence",
            allocationSize = 1
            )
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "name_sequence"
    )
    private Long id;
    private String username;
    private String email;
    private String tankHT;
    private String tankRadii;
    private String password;





    public AppUser(String username,
                   String email,
                   String tankHT,
                   String tankRadii,
                   String password) {
        this.username = username;
        this.email = email;
        this.tankHT = tankHT;
        this.tankRadii = tankRadii;
        this.password = password;

    }







}


