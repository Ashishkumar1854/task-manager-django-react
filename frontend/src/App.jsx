import TaskManager from "./components/TaskManager";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Task Manager</h1>
        <p className="text-gray-600">
          Manage your tasks efficiently with AI internship demo
        </p>
      </header>

      <main className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <TaskManager />
      </main>

      <footer className="text-center mt-6 text-gray-500 text-sm">
        &copy; 2025 Aarohita Vigyan Internship Task
      </footer>
    </div>
  );
}

export default App;
