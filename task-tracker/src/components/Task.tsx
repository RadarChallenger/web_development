import React from 'react'
import ITask from './Interfaces'
import { FaTimes } from 'react-icons/fa'

interface TaskProps {
    task: ITask,
    onDelete: (id: number) => void;
}

function Task({task, onDelete}: TaskProps) {
  return (
    <div className='task'>
      <h3>{ task.text } <FaTimes style={{
        color:'red', cursor: 'pointer'
      }} onClick={() => onDelete(task.id)}/>
      </h3>
      <p>{ task.day }</p>
    </div>
  )
}

export default Task
