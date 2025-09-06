package instituto.app.gestionservice.endpoints.core.repository;

import instituto.app.gestionservice.endpoints.core.entity.Docente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface DocenteRepository extends JpaRepository<Docente, Integer> {



    @Query(value = "call  dbacademico_desa.sp_listar_docente()", nativeQuery = true
    )
    List<Map<String, Object>> listarDocentes();
}
