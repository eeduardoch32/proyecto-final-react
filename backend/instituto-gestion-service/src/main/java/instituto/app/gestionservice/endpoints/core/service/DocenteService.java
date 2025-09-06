package instituto.app.gestionservice.endpoints.core.service;

import instituto.app.gestionservice.endpoints.core.dto.response.DocenteResponse;
import instituto.app.gestionservice.endpoints.core.entity.Docente;

import java.util.List;
import java.util.Optional;

public interface DocenteService {

    List<Docente> findAll();
    Optional<Docente> findById(Integer id);
    Docente save(Docente docente);
    Docente update(Integer id, Docente docente);
    void deleteById(Integer id);

    List<DocenteResponse> listarDocentes();
}
