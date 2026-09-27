package course.course.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "youtube_resource")
public class YoutubeResource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;

    private String channelName;

    private String authorName;

    private String Language;

    private String duration;

    private LocalDate upload;

    @Column(length = 3000)
    private String description;

    @Column(length = 2000)
    private String topicsCovered;

    private String videoUrl;

    private String status;

    private long views;

    @ManyToOne
    @JoinColumn(name = "technology_id")
    private Technology technology;
}
