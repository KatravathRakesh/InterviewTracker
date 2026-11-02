import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getInterviewById, updateInterviewById } from "./interviewService";
import "./updateInterview.css";

function UpdateExperience() {
  const { id } = useParams();
  const [interview, setInterview] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInterview({ ...interview, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadData();
  }, [id]);

  const loadData = async () => {
    const response = await getInterviewById(id);
    setInterview(response.data);
  };

  const updateDate = async () => {
    await updateInterviewById(id, interview);
    alert("Updated Successfully!");
    navigate("/get");
  };

  return (
    <div className="UpdateData">
      <h1>Edit the Interview Experience !!</h1>
      <div className="form-grid">
        {/* Student ID */}
        <div className="from-group">
          <label>Student ID :</label>
          <input
            type="text"
            name="id"
            value={interview.id || id}
            onChange={handleChange}
            readOnly
          ></input>
        </div>

        {/* Student Name */}
        <div className="form-group">
          <label>Student Name :</label>
          <input
            type="text"
            name="sname"
            value={interview.sname}
            onChange={handleChange}
          />
        </div>

        {/* Company Name */}
        <div className="form-group">
          <label>Company Name :</label>
          <input
            type="text"
            name="companyName"
            value={interview.companyName}
            onChange={handleChange}
          />
        </div>

        {/* Job Role */}
        <div className="form-group">
          <label>Job Role :</label>
          <input
            type="text"
            name="jobRole"
            value={interview.jobRole}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Interview Round :</label>
          <select
            name="interviewRound"
            value={interview.interviewRound}
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
          <label>Difficulty Level :</label>
          <select
            name="difficulty"
            value={interview.difficulty}
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
          <label>Result :</label>
          <select
            name="result"
            value={interview.result}
            onChange={handleChange}
          >
            <option value="">Select Result</option>
            <option value="Selected">Selected</option>
            <option value="Rejected">Rejected</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        {/* Experience */}
        <div className="form-group experience-field">
          <label>Experience / Notes :</label>
          <textarea
            name="experience"
            value={interview.experience}
            placeholder="Write your experience..."
            onChange={handleChange}
            rows="3"
            cols="40"
          />
        </div>

        <button type="submit" className="save-btn" onClick={updateDate}>
          Update Experience
        </button>
      </div>
    </div>
  );
}

export default UpdateExperience;
