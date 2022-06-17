import ITask from "./Interfaces"
import Task from "./Task"

interface TasksProps {
    tasks: ITask[],
    onDelete: (id: number) => void;
}

function Tasks({tasks, onDelete}: TasksProps) {
    return (
        <div>
            {tasks.map( (task, index) => <Task key={task.id} task={task} onDelete={onDelete}/>)}
        </div>
    )
}

export default Tasks


