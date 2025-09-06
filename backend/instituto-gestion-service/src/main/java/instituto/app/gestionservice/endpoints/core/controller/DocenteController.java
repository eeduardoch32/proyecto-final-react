package instituto.app.gestionservice.endpoints.core.controller;


import instituto.app.gestionservice.endpoints.core.dto.response.DocenteResponse;
import instituto.app.gestionservice.endpoints.core.entity.Docente;
import instituto.app.gestionservice.endpoints.core.service.DocenteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/docente")
public class DocenteController {

    private final DocenteService docenteService;

    public DocenteController(DocenteService docenteService) {
        this.docenteService = docenteService;
    }


    // Listar todos los docentes
    @GetMapping
    public ResponseEntity<List<Docente>> listarDocentes() {
        return ResponseEntity.ok(docenteService.findAll());
    }



    // Listar todos los docentes
    @GetMapping("/listar")
    public ResponseEntity<List<DocenteResponse>> listarDocentes2() {

        return ResponseEntity.ok(docenteService.listarDocentes());
    }




    // Obtener usuario por ID
    @GetMapping("/{id}")
    public ResponseEntity<Docente> obtenerDocente(@PathVariable Integer id) {
        return docenteService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Crear nuevo usuario
    @PostMapping
    public ResponseEntity<Docente> crearDocente(@RequestBody Docente usuario) {
        return ResponseEntity.ok(docenteService.save(usuario));
    }

    // Actualizar usuario
    @PutMapping("/{id}")
    public ResponseEntity<Docente> actualizarDocente(@PathVariable Integer id, @RequestBody Docente usuario) {
        return docenteService.findById(id).map(u -> {
            u.setCodDocente(usuario.getCodDocente());
            u.setNombreDocente(usuario.getNombreDocente());
            u.setCodEspecialidad(usuario.getCodEspecialidad());
            u.setEdad(usuario.getEdad());
            u.setTelefono(usuario.getTelefono());
            u.setCorreo(usuario.getCorreo());


            return ResponseEntity.ok(docenteService.save(u));
        }).orElse(ResponseEntity.notFound().build());
    }

    // Eliminar usuario
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarDocente(@PathVariable Integer id) {
        if (docenteService.findById(id).isPresent()) {
            docenteService.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}