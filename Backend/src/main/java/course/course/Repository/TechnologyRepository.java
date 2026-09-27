package course.course.Repository;

import course.course.Model.Technology;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TechnologyRepository extends JpaRepository<Technology,Long> {

    Technology findByName(String name);
}
