package instituto.app.gestionservice.endpoints.core.service.impl;

import instituto.app.gestionservice.endpoints.core.entity.Especialidad;
import instituto.app.gestionservice.endpoints.core.repository.EspecialidadRepository;
import instituto.app.gestionservice.endpoints.core.service.EspecialidadService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EspecialidadServiceImpl implements EspecialidadService {


    private final EspecialidadRepository especialidadRepository;

    public EspecialidadServiceImpl(EspecialidadRepository especialidadRepository) {
        this.especialidadRepository = especialidadRepository;
    }

    @Override
    public List<Especialidad> findAll() {
       return especialidadRepository.findAll();


    }

    @Override
    public Optional<Especialidad> findById(String id) {
        return especialidadRepository.findById(id);
    }

    @Override
    public Especialidad save(Especialidad especialidad) {
        return especialidadRepository.save(especialidad);
    }

    @Override
    public Especialidad update(String id, Especialidad usuario) {

        return especialidadRepository.findById(id).map(u -> {
            u.setNombreEspecialidad(usuario.getNombreEspecialidad());

            return especialidadRepository.save(u);
        }).orElseThrow(() -> new RuntimeException("Especialidad no encontrado con id: " + id));

    }

    @Override
    public void deleteById(String id) {
        especialidadRepository.deleteById(id);
    }
}
