package instituto.app.gestionservice.endpoints.core.service;

import instituto.app.gestionservice.endpoints.core.entity.Usuario;

import java.util.List;
import java.util.Optional;

public interface UsuarioService {

    List<Usuario> findAll();
    Optional<Usuario> findById(Integer id);
    Usuario save(Usuario usuario);
    Usuario update(Integer id, Usuario usuario);
    void deleteById(Integer id);

    Optional<Usuario> login(String correo, String clave);
}
