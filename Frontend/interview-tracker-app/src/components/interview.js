import { useState } from "react";
import { insertInterview } from "./interviewService";
import { useNavigate } from "react-router-dom";
import "./AddExperience.css";

function AddExperience() {

  const navigate = useNavigate();
  const [interview, setInterview] = useState({
    sname: "",
    companyName: "",
    jobRole: "",
    interviewRound: "",
    difficulty: "",
    result: "",
    experience: "",
  });

  const handleChange = (e) => {
    setInterview({...interview, [e.target.name]: e.target.value});
 };

 const save = () => {
  insertInterview(interview);
  navigate("/get");
 }

  return (
    <div className="experience-container">
      <h2> ➕ Add Interview Experience</h2>
      <p>
        Fill in the details of your interview to keep track of your journey.
      </p>
      <form >
        <div className="form-grid">

          {/* Student Name */}
          <div className="from-group">
            <label>Student / Candidate Name <span style={{color:"red"}}>*</span></label>
            <input type="text" name="sname" placeholder="Enter your name" onChange={handleChange}></input>
          </div>
  

          {/* Company Name */}
          <div className="form-group">
            <label>Company Name <span style={{color:"red"}}>*</span></label>
            <input type="text" name="companyName" placeholder="Enter campany name" onChange={handleChange}></input>
          </div>



          {/* Job Role */}
          <div className="form-group">
            <label>Job Role <span style={{color:"red"}}>*</span></label>
            <input type="text" name="jobRole" placeholder="Enter job role" onChange={handleChange}></input>
          </div>

          {/* Interview Round */}
          <div className="form-group">
            <label>
              Interview Round <span style={{color:"red"}}>*</span>
            </label>
            <select
              name="interviewRound"
              onChange={handleChange}
            >
              <option value="">Select Round</option>
              <option value="HR">HR Round</option>
              <option value="Technical">Technical Round</option>
              <option value="Managerial">Managerial Round</option>
              <option value="Coding">Coding Round</option>
            </select>
          </div>

          {/* Difficulty */}
          <div className="form-group">
            <label>
              Difficulty Level <span style={{color:"red"}}>*</span>
            </label>
            <select
              name="difficulty"
              onChange={handleChange}
            >
              <option value="">Select Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Result */}
          <div className="form-group">
            <label>
              Result <span style={{color:"red"}}>*</span>
            </label>
            <select
              name="result"
              onChange={handleChange}
            >
              <option value="">Select Result</option>
              <option value="Selected">Selected</option>
              <option value="Rejected">Rejected</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>

        {/* Experience */}
        <div className="form-group experience-field">
          <label>Experience / Notes</label>
          <textarea
            name="experience"
            placeholder="Write your experience, feedback or additional notes..."
            onChange={handleChange}
            rows="3"
            cols= "40"
          />
        </div>

        <button type="submit" className="save-btn" onClick={save}>
          Save Experience
        </button>
      </form>
    </div>
  );
}

export default AddExperience;
