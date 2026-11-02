package com.interviewtracker.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.interviewtracker.Entity.InterviewExperience;

@Repository
public interface InterviewExperienceRepository  extends JpaRepository<InterviewExperience, Integer>{

	
}
