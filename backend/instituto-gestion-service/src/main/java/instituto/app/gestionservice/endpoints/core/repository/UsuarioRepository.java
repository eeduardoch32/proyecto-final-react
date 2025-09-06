package instituto.app.gestionservice.endpoints.core.repository;

import instituto.app.gestionservice.endpoints.core.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    Optional<Usuario> findByCorreoAndClave(String correo, String clave);
}
