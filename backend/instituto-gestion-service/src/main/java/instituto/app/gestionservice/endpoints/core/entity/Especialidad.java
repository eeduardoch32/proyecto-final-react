package instituto.app.gestionservice.endpoints.core.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "especialidad")
@Data  // incluye @Getter, @Setter, @ToString, @EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Especialidad {

    @Id
    @Column(name = "cod_especialidad")
    private String codEspecialidad;

    @Column(name = "nombre_especialidad")
    private String nombreEspecialidad;


}