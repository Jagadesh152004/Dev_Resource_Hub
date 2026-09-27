package course.course.Controller;

import course.course.Model.Technology;
import course.course.Service.TechnologyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/course/technology")
@CrossOrigin(origins = "http://localhost:5173")
public class TechnologyController {

    private final TechnologyService techService;

    public TechnologyController(TechnologyService techService){
        this.techService = techService;
    }

   @PostMapping
   public String postTechnology(@RequestBody Technology technology){
        return techService.saveByTechnology(technology);
   }

   @GetMapping
    public List<Technology> getAllTechnology(){
        return techService.getAllTechnology();
   }

   @GetMapping("/{id}")
    public Technology getByIdTechnology(@PathVariable long id){
        return techService.getTechnologyById(id);
   }

}
