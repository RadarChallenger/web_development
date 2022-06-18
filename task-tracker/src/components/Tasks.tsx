import Task from "./Task"
import ITask from "./Interfaces/ITask";

interface TasksProps {
    tasks: ITask[],
    onDelete: (id: number) => void;
    toggleReminder: (id: number) => void;
}

function Tasks({ tasks, onDelete, toggleReminder }: TasksProps) {
    return (
        <div>
            {tasks.map((task) => <Task key={task.id} task={task} onDelete={onDelete} toggleReminder={toggleReminder} />)}
        </div>
    )
}

export default Tasks


