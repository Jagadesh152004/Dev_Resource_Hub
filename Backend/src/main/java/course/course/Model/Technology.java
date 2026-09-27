package course.course.Model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "technology")
public class Technology {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
}
