package instituto.app.gestionservice.endpoints.core.dto.response;


import instituto.app.gestionservice.endpoints.core.entity.Usuario;
import lombok.Data;

@Data
public class LoginResponse {
    private boolean success;
    private String message;
    private Usuario usuario;
}
