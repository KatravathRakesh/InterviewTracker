package com.interviewtracker.Service;

import java.util.List;

import com.interviewtracker.Entity.InterviewExperience;

public interface InterviewExperienceService {

//	add Experiences
	InterviewExperience addExperience(InterviewExperience ie);
	
//	Get All Experiences
	List<InterviewExperience> getAllExperiences();
	
//	Get Experiences by ID
	InterviewExperience getExperienceById(Integer id);
	
//	put Experiences by id
	InterviewExperience updateAllExperience(InterviewExperience ie, Integer id);
	
//	patch Experiences by id
	InterviewExperience updateExperience(InterviewExperience ie, Integer id);
	
//	delete  Experiences by id 
	void deleteExperience(Integer id);
}
