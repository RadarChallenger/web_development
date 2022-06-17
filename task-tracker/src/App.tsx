import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import ITask from "./components/Interfaces";


function App() {
  const [ tasks, setTask ] = React.useState<ITask[]>([{
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

  const deleteTask = (id : number) => {
    console.log('Delete', id)
  }

  return (
    <div className="container">
      <Header text="Task Tracker"/>
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
