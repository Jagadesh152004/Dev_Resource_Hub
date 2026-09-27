package course.course.Repository;

import course.course.Model.YoutubeResource;
import org.springframework.data.jpa.repository.JpaRepository;

public interface YoutubeResourceRepository extends JpaRepository<YoutubeResource, Long> {
}
