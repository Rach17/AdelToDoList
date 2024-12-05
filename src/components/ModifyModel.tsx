import Task from "../types/Task";
import Difficulty from "../types/Difficulty";
import Status from "../types/Status";
import { useEffect, useState } from "react";

interface ModifyModalProps {
  task: Task;
  onSave: (task: Task) => void;
}

const ModifyModel = ({ onSave, task }: ModifyModalProps) => {
  const [modifiedTask, setModifiedTask] = useState<Task>(task);

  useEffect(() => {
    if (task) {
      setModifiedTask({ ...task });
    }
  }, [task]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setModifiedTask({...modifiedTask, title: modifiedTask.title.trim(), description: modifiedTask.description.trim()});
    onSave(modifiedTask);
  };

  return (
    <div className="container mx-auto px-4 py-8v  w-screen flex flex-col justify-center	items-center		">
      <h2 className="text-center mb-8 text-2xl font-semibold max-w-screen-md w-full">Modify Task</h2>
      <form onSubmit={handleSave} className="space-y-6 max-w-screen-md 	w-full">
        {/* ID Input Read Only */}
        <div className="form-group flex items-center space-x-4 w-full">
          <label htmlFor="id" className="block text-sm font-medium text-gray-700 text-start w-28		">
            ID
          </label>
          <input
            type="text"
            name="id"
            readOnly
            value={modifiedTask.id}
            className="mt-1 block grow	 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Date of Creation Input Read Only */}
        <div className="form-group flex items-center space-x-4">
          <label htmlFor="dateOfCreation" className="block text-sm font-medium text-gray-700 text-start w-28		">
            Date of Creation
          </label>
          <input
            type="date"
            name="dateOfCreation"
            readOnly
            value={new Date(modifiedTask.dateOfCreation).toISOString().split("T")[0]}
            className="mt-1 block grow	 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Title Input */}
        <div className="form-group flex items-center space-x-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 text-start w-28		">
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            className="mt-1 block grow	 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
            value={modifiedTask.title}
            onChange={(e) =>
              setModifiedTask({ ...modifiedTask, title: e.target.value })
            }
          />
        </div>

        {/* Description Input */}
        <div className="form-group flex items-center space-x-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 text-start w-28		">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Task Description"
            className="mt-1 block grow	 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={modifiedTask.description}
            onChange={(e) =>
              setModifiedTask({ ...modifiedTask, description: e.target.value })
            }
          />
        </div>

        {/* Date to Do Input */}
        <div className="form-group flex items-center space-x-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 text-start w-28		">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            value={new Date(modifiedTask.dateToDo).toISOString().split("T")[0]}
            className="mt-1 block grow	 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) =>
              setModifiedTask({
                ...modifiedTask,
                dateToDo: new Date(e.target.value),
              })
            }
          />
        </div>

        {/* Difficulty Input */}
        <div className="form-group flex items-center space-x-4">
          <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 text-start w-28		">
            Difficulty
          </label>
          <select
            name="difficulty"
            className="mt-1 block grow	 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={modifiedTask.difficulty}
            onChange={(e) =>
              setModifiedTask({
                ...modifiedTask,
                difficulty: e.target.value as Difficulty,
              })
            }
          >
            <option value={Difficulty.EASY}>Easy</option>
            <option value={Difficulty.MEDIUM}>Medium</option>
            <option value={Difficulty.HARD}>Hard</option>
          </select>
        </div>

        {/* Status Input */}
        <div className="form-group flex items-center space-x-4">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 text-start w-28		">
            Status
          </label>
          <select
            name="status"
            className="mt-1 block grow	 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={modifiedTask.status}
            onChange={(e) =>
              setModifiedTask({
                ...modifiedTask,
                status: e.target.value as Status,
              })
            }
          >
            <option value={Status.Pending}>Not Started</option>
            <option value={Status.InProgress}>In Progress</option>
            <option value={Status.Completed}>Completed</option>
          </select>
        </div>

        {/* Save Changes Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModifyModel;
