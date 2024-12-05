import Difficulty from "./Difficulty";
import Status from "./Status";

interface Task {
    id: number;
    title: string;
    description: string;
    status: Status;
    dateOfCreation: Date;
    dateToDo: Date;
    dateOfCompletion: Date;
    difficulty: Difficulty;
}

export default Task;