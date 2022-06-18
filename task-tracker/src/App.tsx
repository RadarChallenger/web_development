import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import ITask from "./components/Interfaces/ITask";


function App() {
  const [tasks, setTask] = React.useState<ITask[]>([{
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5',
    reminder: true
  },
  {
    id: 2,
    text: 'Meeting At School',
    day: 'Feb 6',
    reminder: true
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 7',
    reminder: true
  }]);

  const deleteTask = (id: number) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id: number) => {
    setTask(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header text="Task Tracker" />
      <AddTask />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder} />) : ("No Task to Show")}
    </div>
  );
}

export default App;
