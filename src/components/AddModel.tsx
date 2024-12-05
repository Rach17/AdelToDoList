import Task from "../types/Task";
import Status from "../types/Status";
import Difficulty from "../types/Difficulty";
import { useState } from "react";

interface AddModalProps {
  addModalIsOpen: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
}

const AddModal: React.FC<AddModalProps> = ({
  addModalIsOpen,
  onClose,
  onSave,
}) => {
  const [newTask, setNewTask] = useState<Task>({
    id: Date.now(),
    title: "",
    description: "",
    status: Status.Pending,
    dateOfCreation: new Date(),
    dateToDo: new Date(),
    dateOfCompletion: new Date(),
    difficulty: Difficulty.EASY,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(newTask);
    setNewTask({
      id: Date.now(),
      title: "",
      description: "",
      status: Status.Pending,
      dateOfCreation: new Date(),
      dateToDo: new Date(),
      dateOfCompletion: new Date(),
      difficulty: Difficulty.EASY,});
    onClose();
  };

  return addModalIsOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className=" text-center border-b pb-3 mb-4 text-lg font-semibold">
          Add a New Task
        </h2>
        <form onSubmit={handleSave}>
          {/* Title Input */}
          <div className="form-group mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Task Title"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value.trim() })
              }
            />
          </div>
          {/* Description Input */}
          <div className="form-group mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="description"
              placeholder="Task Description"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value.trim() })
              }
            />
          </div>
          {/* Date Input */}
          <div className="form-group mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={newTask.dateToDo.toISOString().split("T")[0]}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Difficulty Input */}
          <div className="form-group mb-4">
            <label
              htmlFor="difficulty"
              className="block text-sm font-medium text-gray-700"
            >
              Difficulty
            </label>
            <select
              name="difficulty"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={newTask.difficulty}
              onChange={(e) =>
                setNewTask({
                  ...newTask,
                  difficulty: e.target.value as Difficulty,
                })
              }
            >
              <option value={Difficulty.EASY}>Easy</option>
              <option value={Difficulty.MEDIUM}>Medium</option>
              <option value={Difficulty.HARD}>Hard</option>
            </select>
          </div>
          {/* Buttons */}
          <div className="flex justify-end">
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 mr-2"
            >
              Close
            </button>
            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null; // Return null if modal is not open
};

export default AddModal;
