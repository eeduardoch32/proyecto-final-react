package instituto.app.gestionservice.endpoints.core.controller;

import instituto.app.gestionservice.endpoints.core.entity.Especialidad;
import instituto.app.gestionservice.endpoints.core.service.EspecialidadService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/especialidad")
public class EspecialidadController {


    private final EspecialidadService especialidadService;

    public EspecialidadController(EspecialidadService especialidadService) {
        this.especialidadService = especialidadService;
    }


    // Listar todos las especialidades
    @GetMapping
    public ResponseEntity<List<Especialidad>> listarEspecialidades() {
        return ResponseEntity.ok(especialidadService.findAll());
    }

}
