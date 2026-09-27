package course.course.Service;

import course.course.Model.Technology;
import course.course.Repository.TechnologyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TechnologyService {

    private final TechnologyRepository technologyRepo;

    public TechnologyService(TechnologyRepository technologyRepo){
        this.technologyRepo = technologyRepo;
    }

    //create a new resource
    public String saveByTechnology(Technology tech){
        technologyRepo.save(tech);
        return "Successfully Created...";
    }

    //get all technology list
    public List<Technology> getAllTechnology(){
        return technologyRepo.findAll();
    }

    //get by id
    public Technology getTechnologyById(long id){
        return technologyRepo.findById(id).orElse(null);
    }

}
