import axios from "axios";

const API_URL = "http://localhost:5000";

export const fetchTasks = async () => {
  const res = await axios.get(`${API_URL}/tasks`);
  return res.data;
};

export const addTask = async (task) => {
  await axios.post(`${API_URL}/tasks/add`, task);
};
