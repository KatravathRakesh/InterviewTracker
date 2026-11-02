import logo from "./logo.svg";
import "./App.css";
import AddExperience from "./components/interview";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import GetExperience from "./components/getInterview";
import UpdateExperience from "./components/updateInterview";

function App() {
  return (
    <div className="App">
      <h1>Interview Tracker Application</h1>
      <Router>
        <Routes>
          <Route path="/" element={<AddExperience />} />
          <Route path="/get" element={<GetExperience />} />
          <Route path="/update/:id" element = {<UpdateExperience/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
