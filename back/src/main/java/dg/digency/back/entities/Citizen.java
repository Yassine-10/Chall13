package dg.digency.back.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.bind.annotation.CrossOrigin;


import java.util.Date;


@Entity
@Table
@Data
@NoArgsConstructor @AllArgsConstructor @ToString

public class Citizen {
    @Id @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String nomArabe;
    private String prenom;
    private String prenomArabe;
    private String cin;
    private String profession;
    private Date dateNaissance;
    private String typeCarte;
    @Column(name = "image", length = 100000)
    private byte[] image;


}
