package instituto.app.gestionservice.endpoints.core.service.impl;

import instituto.app.gestionservice.endpoints.core.dto.response.DocenteResponse;
import instituto.app.gestionservice.endpoints.core.entity.Docente;
import instituto.app.gestionservice.endpoints.core.repository.DocenteRepository;
import instituto.app.gestionservice.endpoints.core.service.DocenteService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;

@Service
public class DocenteServiceImpl implements DocenteService {


    private final DocenteRepository docenteRepository;

    public DocenteServiceImpl(DocenteRepository docenteRepository) {
        this.docenteRepository = docenteRepository;
    }

    @Override
    public List<Docente> findAll() {
       return docenteRepository.findAll();

    }


    @Override
    public Optional<Docente> findById(Integer id) {
        return docenteRepository.findById(id);
    }

    @Override
    public Docente save(Docente usuario) {
        return docenteRepository.save(usuario);
    }

    @Override
    public Docente update(Integer id, Docente usuario) {

        return docenteRepository.findById(id).map(u -> {
            u.setCodDocente(usuario.getCodDocente());
            u.setNombreDocente(usuario.getNombreDocente());
            u.setCodEspecialidad(usuario.getCodEspecialidad());
            u.setTelefono(usuario.getTelefono());
            u.setEdad(usuario.getEdad());
            u.setCorreo(usuario.getCorreo());

            return docenteRepository.save(u);
        }).orElseThrow(() -> new RuntimeException("Docente no encontrado con id: " + id));

    }

    @Override
    public void deleteById(Integer id) {
        docenteRepository.deleteById(id);
    }

    @Override
    public List<DocenteResponse> listarDocentes() {

        return new ModelMapper().map(docenteRepository.listarDocentes(),
                new TypeToken<List<DocenteResponse>>() { }.getType());

    }
}
