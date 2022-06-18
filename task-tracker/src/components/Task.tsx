import React from 'react'
import { FaTimes } from 'react-icons/fa'
import ITask from "./Interfaces/ITask";

interface TaskProps {
    task: ITask,
    onDelete: (id: number) => void;
    toggleReminder: (id: number) => void;
}

function Task({ task, onDelete, toggleReminder }: TaskProps) {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(task.id)}>
            <h3>{task.text} <FaTimes style={{
                color: 'red', cursor: 'pointer'
            }} onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
