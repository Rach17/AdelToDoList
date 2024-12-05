import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ToDoList from "./pages/ToDoList";
import ModifyTask from "./pages/ModifyTask";
import NotFound from "./pages/NotFound";

const App : React.FC = () => {
  return (

    <Router>
      <Routes>
         {/* Route to display the list of tasks */}
         <Route path="/" element={<ToDoList />} />
        
        {/* Route to modify a task, passing the tasks via location state */}
        <Route path="/modify/:id" element={<ModifyTask/>} />

        {/* Route to not found page */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
