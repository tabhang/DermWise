package org.system.health.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Disease {

    @Id
    private Integer id;

    @Column(name = "Disease")
    private String disease;

    @Column(name = "Precaution_1")
    private String precaution_1;

    @Column(name = "Precaution_2")
    private String precaution_2;

    @Column(name = "Precaution_3")
    private String precaution_3;

    @Column(name = "Precaution_4")
    private String precaution_4;
}
