import Task from "../types/Task";

export const loadTasks = () => {
  const tasks = localStorage.getItem("Tasks");
  return tasks ? JSON.parse(tasks) : [];
};

export const saveTasks = (
    tasks: Task[]
) => {
  localStorage.setItem("Tasks", JSON.stringify(tasks));
};
