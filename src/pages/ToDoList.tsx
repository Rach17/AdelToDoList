import ToDoForm from "../components/ToDoFrom";
import AddModal from "../components/AddModel";
import { useState } from "react";
import { useEffect } from "react";
import Task from "../types/Task";
import Status from "../types/Status";
import { loadTasks, saveTasks } from "../utils/LocalStorage";
import ToDoItem from "../components/ToDoItem";

const ToDoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [addModalIsOpen, setaddModalIsOpen] = useState(false);

  useEffect(() => {
    const tasks = loadTasks();
    setTasks(tasks);
  }, []);

  const addTask = (task: Task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const toggleTask = (id: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.status =
          task.status === Status.Completed ? Status.Pending : Status.Completed;
      }
      return task;
    });
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const deleteTask = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const openAddModal = () => {
    setaddModalIsOpen(true);
  };

  const closeAddModal = () => {
    setaddModalIsOpen(false);
  };

  const searchTasks = (searchQuery: string) => {
    const tasks = loadTasks();
    if (searchQuery !== "") {
      const newTasks = tasks.filter((task: Task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setTasks(newTasks);
    } else {
      setTasks(tasks);
    }
  };

  return (
    <div className="text-center text-2xl text-blue-500">
      <h1>Welcome to To-Do List App</h1>
      <ToDoForm onAdd={openAddModal} onSearch={searchTasks} />

      {/* Modal for adding a new task */}
      <AddModal
        addModalIsOpen={addModalIsOpen}
        onClose={closeAddModal}
        onSave={addTask}
      />

      {/* List of tasks */}
      <div className="mt-8">
        {tasks.map((task) => (
          <ToDoItem task={task} onToggle={toggleTask} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
