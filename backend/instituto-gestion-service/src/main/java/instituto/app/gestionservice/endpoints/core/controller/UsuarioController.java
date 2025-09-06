package instituto.app.gestionservice.endpoints.core.controller;

import instituto.app.gestionservice.endpoints.core.dto.request.LoginRequest;
import instituto.app.gestionservice.endpoints.core.dto.response.LoginResponse;
import instituto.app.gestionservice.endpoints.core.entity.Usuario;
import instituto.app.gestionservice.endpoints.core.service.UsuarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuario")
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        return usuarioService.login(request.getCorreo(), request.getClave())
                .map(usuario -> {
                    LoginResponse response = new LoginResponse();
                    response.setSuccess(true);
                    response.setMessage("Login exitoso");
                    response.setUsuario(usuario);
                    return ResponseEntity.ok(response);
                })
                .orElseGet(() -> {
                    LoginResponse response = new LoginResponse();
                    response.setSuccess(false);
                    response.setMessage("Correo o clave incorrectos");
                    return ResponseEntity.status(401).body(response);
                });
    }




    // Listar todos los usuarios
    @GetMapping
    public ResponseEntity<List<Usuario>> listarUsuarios() {
        return ResponseEntity.ok(usuarioService.findAll());
    }

    // Obtener usuario por ID
    @GetMapping("/{id}")
    public ResponseEntity<Usuario> obtenerUsuario(@PathVariable Integer id) {
        return usuarioService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Crear nuevo usuario
    @PostMapping
    public ResponseEntity<Usuario> crearUsuario(@RequestBody Usuario usuario) {
        return ResponseEntity.ok(usuarioService.save(usuario));
    }

    // Actualizar usuario
    @PutMapping("/{id}")
    public ResponseEntity<Usuario> actualizarUsuario(@PathVariable Integer id, @RequestBody Usuario usuario) {
        return usuarioService.findById(id).map(u -> {
            u.setCorreo(usuario.getCorreo());
            u.setClave(usuario.getClave());

            return ResponseEntity.ok(usuarioService.save(u));
        }).orElse(ResponseEntity.notFound().build());
    }

    // Eliminar usuario
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarUsuario(@PathVariable Integer id) {
        if (usuarioService.findById(id).isPresent()) {
            usuarioService.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}