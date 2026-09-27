package course.course.Controller;

import course.course.Model.YoutubeResource;
import course.course.Service.YoutubeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/resource/youtube")
@CrossOrigin(origins = "http://localhost:5173")
public class YoutubeController {

    private final YoutubeService youtubeService;

    public YoutubeController(YoutubeService youtubeService){
        this.youtubeService = youtubeService;
    }

    @PostMapping
    public void postYoutubeResource(
            @ModelAttribute YoutubeResource resource,
            @RequestParam long technologyId
    ){
         youtubeService.saveResource(resource,technologyId);
    }

    @GetMapping
    public List<YoutubeResource> getAllYoutube(){
        return youtubeService.getAllResource();
    }

    @GetMapping("/{id}")
    public YoutubeResource getByIdResource(@PathVariable long id){
        return youtubeService.getResourceById(id);
    }

    @PutMapping("/{id}")
    public String updateYoutubeResource(
            @PathVariable long id,
            @ModelAttribute YoutubeResource resource,
            @RequestParam long technologyId
    ) {
        return youtubeService.updateResource(id, resource, technologyId);
    }

    @DeleteMapping("/{id}")
    public void deleteYoutubeResourceById(@PathVariable long id){
        youtubeService.deleteResourceById(id);
    }

}
