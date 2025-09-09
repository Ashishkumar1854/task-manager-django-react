import { useEffect, useState } from "react";
import { getTasks, addTask, toggleTask, deleteTask } from "../api/taskApi";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleAddTask = async () => {
    if (!newTask.trim()) return;
    try {
      await addTask(newTask.trim());
      setNewTask("");
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleToggle = async (id) => {
    try {
      await toggleTask(id);
      fetchTasks();
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAddTask}
          className="px-4 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

      <ul>
        {tasks.length === 0 && (
          <p className="text-gray-500 text-sm">
            No tasks available. Add a new task!
          </p>
        )}
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center mb-2 p-2 rounded hover:bg-gray-100 transition"
          >
            <span
              onClick={() => handleToggle(task.id)}
              className={`cursor-pointer ${
                task.is_done ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {task.title}
            </span>
            <button
              onClick={() => handleDelete(task.id)}
              className="text-red-500 font-semibold hover:text-red-700 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
