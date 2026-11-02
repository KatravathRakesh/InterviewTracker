package com.interviewtracker.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.interviewtracker.Entity.InterviewExperience;
import com.interviewtracker.Repository.InterviewExperienceRepository;

@Service
public class InterviewExperienceServiceImp implements InterviewExperienceService {

	@Autowired
	InterviewExperienceRepository ieRepo;

	@Override
	public InterviewExperience addExperience(InterviewExperience ie) {
		return ieRepo.save(ie);
	}

	@Override
	public List<InterviewExperience> getAllExperiences() {
		return ieRepo.findAll();
	}

	@Override
	public InterviewExperience getExperienceById(Integer id) {
		return ieRepo.findById(id).get();
	}

	@Override
	public InterviewExperience updateAllExperience(InterviewExperience ie, Integer id) {
		InterviewExperience i = ieRepo.findById(id).get();

		i.setCompanyName(ie.getCompanyName());
		i.setJobRole(ie.getJobRole());
		i.setInterviewRound(ie.getInterviewRound());
		i.setDifficulty(ie.getDifficulty());
		i.setResult(ie.getResult());
		i.setExperience(ie.getExperience());
		return ieRepo.save(i);
	}

	@Override
	public InterviewExperience updateExperience(InterviewExperience ie, Integer id) {

		InterviewExperience i = ieRepo.findById(id).get();

		if (ie.getSname() != null) {
			i.setSname(ie.getSname());
		}
		if (ie.getCompanyName() != null) {
			i.setCompanyName(ie.getCompanyName());
		}

		if (ie.getJobRole() != null) {
			i.setJobRole(ie.getJobRole());
		}

		if (ie.getInterviewRound() != null) {
			i.setInterviewRound(ie.getInterviewRound());
		}

		if (ie.getDifficulty() != null) {
			i.setDifficulty(ie.getDifficulty());
		}

		if (ie.getResult() != null) {
			i.setResult(ie.getResult());
		}

		if (ie.getExperience() != null) {
			i.setExperience(ie.getExperience());
		}

		return ieRepo.save(i);

	}

	@Override
	public void deleteExperience(Integer id) {
		ieRepo.deleteById(id);
	}

}
