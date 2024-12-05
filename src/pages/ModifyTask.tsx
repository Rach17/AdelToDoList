import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadTasks, saveTasks } from "../utils/LocalStorage";
import Task from "../types/Task";
import ModifyModel from "../components/ModifyModel";

const ModifyTask = () => {
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = useState<Task | null>(null);
  const [tasks, setTasks] = useState<Task[]>(loadTasks());
  const navigate = useNavigate();

  useEffect(() => {
    const tasks = loadTasks();
    setTasks(tasks);
  }, []);
  
  useEffect(() => {
    if (id) {
      const tasks = loadTasks();
      const task = tasks.find((task: Task) => task.id === parseInt(id, 10));
      setTask(task || null);
    }
  }, [id]);

  if (!task) {
    navigate("/not-found", { replace: true });
    return null;
  }

  const handleSave = (updatedTask: Task) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    navigate("/", { replace: true });
  }

  return <ModifyModel task={task} onSave={handleSave} />;
};

export default ModifyTask;
