package com.interviewtracker.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "interview_experience")
@Getter
@Setter
public class InterviewExperience {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	
	String  sname;
	String companyName;
	String jobRole;
	String interviewRound;
	String difficulty;
	String result;
	String experience;
}
