import Task from "../types/Task";
import Status from "../types/Status";
import { Link } from "react-router-dom";

interface ToDoItemProps {
    task: Task;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
  }
  
  const ToDoItem = ({task, onToggle, onDelete }: ToDoItemProps) => {
    return (
      <div className="flex flex-col p-4 mb-2 border rounded-lg">
        {/* Title and Checkbox */}
        <div className="flex items-center justify-between mb-2">
         
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={task.status === Status.Completed}
              onChange={() => onToggle(task.id)}
              className="mr-4"
            />
            <Link to={`/modify/${task.id}`}>
            <span
              className={
                task.status === Status.Completed
                  ? "line-through text-gray-500 font-semibold"
                  : "font-semibold"
              }
            >
              {task.title}
            </span>
            </Link>
          </div>
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
  
        {/* Description */}
        <div className="mb-2">
          <p className="text-sm text-gray-600">{task.description}</p>
        </div>
  
        {/* Date and Difficulty */}
        <div className="flex justify-between text-sm text-gray-500">
          <span>Date: {new Date(task.dateToDo).toLocaleDateString()}</span>
          <span>Difficulty: {task.difficulty}</span>
        </div>
      </div>
    );
  };
  
  export default ToDoItem;
  