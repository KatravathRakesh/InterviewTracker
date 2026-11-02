import { useEffect, useState } from "react";
import { deleteInterviewById, getInterview } from "./interviewService";
import { useNavigate } from "react-router-dom";
import "./GetExperience.css";

function GetExperience() {

    const navigate = useNavigate();
  const [interview, setInterview] = useState([]);

  useEffect(() => {
    LoadData();
  }, []);

  const LoadData = async () => {
    const result = await getInterview();
    setInterview(result.data);
  };

  const deleteInterview= async(id) =>{
    await deleteInterviewById(id)
    LoadData();
  };

  return (
  <div className="table-page">

    <h1 className="table-heading">
      Get All Interview Experiences
    </h1>

    <div className="table-container">

      <table className="interview-table"  style={{marginLeft: "auto", marginRight: "auto",textAlign: "center" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Company Name</th>
            <th>Difficulty</th>
            <th>Experience</th>
            <th>Interview Round</th>
            <th>Job Role</th>
            <th>Result</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
          {interview.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.sname}</td>
              <td>{s.companyName}</td>
              <td>{s.difficulty}</td>
              <td>{s.experience}</td>
              <td>{s.interviewRound}</td>
              <td>{s.jobRole}</td>
              <td>{s.result}</td>
              <td style={{ width: "10%", textAlign: "center" }}><button className="edit-btn" onClick={() => {navigate(`/update/${s.id}`)}} >Edit</button></td>
              <td style={{ width: "10%", textAlign: "center" }}><button className="delete-btn" onClick={()=>{deleteInterview(s.id)}}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  </div>

  );
}

export default GetExperience;
