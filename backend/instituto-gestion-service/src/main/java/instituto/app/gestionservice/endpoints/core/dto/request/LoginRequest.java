package instituto.app.gestionservice.endpoints.core.dto.request;

import lombok.Data;

@Data
public class LoginRequest {
    private String correo;
    private String clave;
}