package instituto.app.gestionservice.endpoints.core.service;

import instituto.app.gestionservice.endpoints.core.entity.Especialidad;

import java.util.List;
import java.util.Optional;

public interface EspecialidadService {

    List<Especialidad> findAll();
    Optional<Especialidad> findById(String id);
    Especialidad save(Especialidad especialidad);
    Especialidad update(String id, Especialidad especialidad);
    void deleteById(String id);
}
