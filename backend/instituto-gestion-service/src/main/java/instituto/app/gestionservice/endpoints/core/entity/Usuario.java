package instituto.app.gestionservice.endpoints.core.entity;


import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "usuario")
@Data  // incluye @Getter, @Setter, @ToString, @EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Integer idUsuario;

    @Column(nullable = false, unique = true, length = 50)
    private String correo;

    @Column(nullable = false, length = 50)
    private String clave;

}