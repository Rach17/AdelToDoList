import React, { useState } from "react";

interface ToDoFormProps {
  onAdd: () => void;
  onSearch: (searchQuery: string) => void;
}

const ToDoForm = ({ onAdd, onSearch }: ToDoFormProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value); // Trigger the search in the parent component
    
  };

  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        value={searchQuery}
        onChange= {handleSearchChange}
        placeholder="Search tasks"
        className="p-2 border rounded-l-lg w-full mb-4"
      />

      {/* Button to open Add Task modal */}
      <button
        onClick={onAdd}
        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Add Task
      </button>
    </div>
  );
};

export default ToDoForm;
