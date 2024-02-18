package org.system.health.Entity;

import jakarta.persistence.*;


@Entity
public class Diagnosis {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long diaId;

    @Column
    private String symptoms;

    @Column
    private String disease;

    @Column
    private String preventions;

    @Column
    private String description;

    @ManyToOne
    @JoinColumn(name = "id")
    private User user;
}
