package instituto.app.gestionservice.endpoints.core.dto.response;


import lombok.Data;

@Data
public class DocenteResponse {


    private Integer idDocente;
    private String codDocente;
    private String nombreDocente;
    private String codEspecialidad;
    private String telefono;
    private String edad;
    private String correo;
    private String nombreEspecialidad;

}
