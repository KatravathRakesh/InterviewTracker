package com.interviewtracker.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.interviewtracker.Entity.InterviewExperience;
import com.interviewtracker.Service.InterviewExperienceService;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/interview")
//http://localhost:9988/interview
public class InterviewExperienceController {

	@Autowired
	InterviewExperienceService ieService;
	
	@PostMapping("/experiences")
	public String addExperience(@RequestBody InterviewExperience ie) {
		ieService.addExperience(ie);
		return "Your data has been posted successfully!";
	}
	
	@GetMapping("/getAll/experiences")
	public List<InterviewExperience> getAllExperiences(){
		return ieService.getAllExperiences();
	}
	
	
	@GetMapping("/getbyId/experiences/{id}")
	public InterviewExperience getExperienceById(@PathVariable Integer id) {
		return ieService.getExperienceById(id);
	}
	
	@PutMapping("/updateAll/experiences/{id}")
	public InterviewExperience updateAllExperience(@RequestBody InterviewExperience ie ,@PathVariable Integer id) {
		return ieService.updateAllExperience(ie, id);
	}
	
	@PatchMapping("/UpdateOneData/experiences/{id}")
	public InterviewExperience updatExperience(@RequestBody InterviewExperience ie ,@PathVariable Integer id) {
		return ieService.updateExperience(ie, id);
	}
	
	@DeleteMapping("/deletedata/experiences/{id}")
	public String deleteExperience(@PathVariable Integer id) {
		ieService.deleteExperience(id);
		return "Experience deleted successfully!";
	}
	
}
