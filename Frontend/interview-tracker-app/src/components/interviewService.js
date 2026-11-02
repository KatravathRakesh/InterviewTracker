
import axios from "axios";

const API_URL = "http://localhost:9988/interview";

export const insertInterview = (interview) => axios.post(`${API_URL}/experiences`, interview);
export const getInterview = () => axios.get(`${API_URL}/getAll/experiences`);
export const deleteInterviewById =(id) => axios.delete(`${API_URL}/deletedata/experiences/${id}`);
export const getInterviewById = (id) => axios.get(`${API_URL}/getbyId/experiences/${id}`);
export const updateInterviewById = (id,interview) => axios.put(`${API_URL}/updateAll/experiences/${id}`, interview)