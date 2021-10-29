package com.example.project.waterTank;

import javax.persistence.*;


@Entity
@Table
public class WaterTank {
    @Id
    @SequenceGenerator(
            name = "volume_sequence",
            sequenceName = "volume_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "volume_sequence"
    )
    private Long id;
    private String name;
    private String volume;

    public WaterTank(Long id, String name, String volume) {
        this.id = id;
        this.name = name;
        this.volume = volume;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getVolume() {
        return volume;
    }

    public WaterTank() {
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setVolume(String volume) {
        this.volume = volume;
    }
}
