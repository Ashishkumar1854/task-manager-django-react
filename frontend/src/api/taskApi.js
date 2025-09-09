import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getTasks = () => axios.get(`${API_URL}/tasks/`);
export const addTask = (title) => axios.post(`${API_URL}/tasks/`, { title });
export const toggleTask = (id) => axios.patch(`${API_URL}/tasks/${id}/toggle/`);
export const deleteTask = (id) => axios.delete(`${API_URL}/tasks/${id}/`);
