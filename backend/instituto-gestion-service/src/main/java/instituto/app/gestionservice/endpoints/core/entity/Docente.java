package instituto.app.gestionservice.endpoints.core.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "docente")
@Data  // incluye @Getter, @Setter, @ToString, @EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Docente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_docente")
    private Integer idDocente;

    @Column(name = "cod_docente")
    private String codDocente;

    @Column(name = "nombre_docente")
    private String nombreDocente;

    @Column(name = "cod_especialidad")
    private String codEspecialidad;

    @Column(name = "telefono")
    private String telefono;

    @Column(name = "edad")
    private String edad;

    @Column(name = "correo")
    private String correo;


}