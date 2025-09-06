package instituto.app.gestionservice.endpoints.core.service.impl;

import instituto.app.gestionservice.endpoints.core.entity.Usuario;
import instituto.app.gestionservice.endpoints.core.repository.UsuarioRepository;
import instituto.app.gestionservice.endpoints.core.service.UsuarioService;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UsuarioServiceImpl implements UsuarioService {


    private final UsuarioRepository usuarioRepository;

    public UsuarioServiceImpl(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public List<Usuario> findAll() {
       return usuarioRepository.findAll();


    }

    @Override
    public Optional<Usuario> findById(Integer id) {
        return usuarioRepository.findById(id);
    }

    @Override
    public Usuario save(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @Override
    public Usuario update(Integer id, Usuario usuario) {

        return usuarioRepository.findById(id).map(u -> {
            u.setCorreo(usuario.getCorreo());
            u.setClave(usuario.getClave());

            return usuarioRepository.save(u);
        }).orElseThrow(() -> new RuntimeException("Usuario no encontrado con id: " + id));

    }

    @Override
    public void deleteById(Integer id) {
        usuarioRepository.deleteById(id);
    }

    @Override
    public Optional<Usuario> login(String correo, String clave) {
        return usuarioRepository.findByCorreoAndClave(correo, clave);
    }
}
