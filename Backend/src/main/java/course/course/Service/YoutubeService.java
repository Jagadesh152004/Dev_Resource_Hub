package course.course.Service;

import course.course.Model.Technology;
import course.course.Model.YoutubeResource;
import course.course.Repository.TechnologyRepository;
import course.course.Repository.YoutubeResourceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class YoutubeService {

    private final YoutubeResourceRepository youtubeRepo;
    private final TechnologyRepository technologyRepo;

    public YoutubeService(YoutubeResourceRepository youtubeRepo,
                          TechnologyRepository technologyRepo){
        this.youtubeRepo = youtubeRepo;
        this.technologyRepo = technologyRepo;
    }

    // post resource
    public void saveResource(
            YoutubeResource resource,
            long technologyId) {

        Technology technology = technologyRepo
                .findById(technologyId)
                .orElseThrow(() ->
                        new RuntimeException("Technology not found"));

        resource.setTechnology(technology);

        youtubeRepo.save(resource);
    }

    //get all YouTube resource
    public List<YoutubeResource> getAllResource(){
        return youtubeRepo.findAll();
    }

    //get resource by id
    public YoutubeResource getResourceById(long id){
        return youtubeRepo.findById(id).orElse(null);
    }

    public void deleteResourceById(long id) {
        youtubeRepo.deleteById(id);
    }

    public String updateResource(
            long id,
            YoutubeResource resource,
            long technologyId
    ) {

        YoutubeResource existingResource = youtubeRepo
                .findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Resource not found"));

        Technology technology = technologyRepo
                .findById(technologyId)
                .orElseThrow(() ->
                        new RuntimeException("Technology not found"));

        existingResource.setTitle(resource.getTitle());
        existingResource.setChannelName(resource.getChannelName());
        existingResource.setAuthorName(resource.getAuthorName());
        existingResource.setLanguage(resource.getLanguage());
        existingResource.setDuration(resource.getDuration());
        existingResource.setUpload(resource.getUpload());
        existingResource.setDescription(resource.getDescription());
        existingResource.setTopicsCovered(resource.getTopicsCovered());
        existingResource.setVideoUrl(resource.getVideoUrl());
        existingResource.setStatus(resource.getStatus());
        existingResource.setViews(resource.getViews());

        existingResource.setTechnology(technology);

        youtubeRepo.save(existingResource);

        return "Resource Updated....";
    }

}
