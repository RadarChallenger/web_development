type task = {id: number, text: string, day: string, reminder: boolean}

let taskList: task[] = [
    {
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
      }
]

function Tasks() {
  return (
    <div>
        {taskList.map((t: task) => (<h3>{t.text}</h3>))}
    </div>
  )
}

export default Tasks


