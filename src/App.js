import React from 'react'
import './style.css'


const App = () => {
 
 const tasks = [
  {id: 1, text: 'Doctors appointment', day: 'Feb 5th at 2:30pm', done: false, note: 'Take the dog with me'},
  {id: 2, text: 'Meeting at school', day: 'Feb 6th at 1:30pm', done: false, note: 'take document'},
  {id: 3, text: 'Food shopping', day: 'Feb 5th at 2:30pm', done: false, note: 'dont forget cc'},
  ]
  const [changedTask, setChangedTask] = React.useState(tasks)

  const handleCompletedTasks = (id) => {
  //  console.log(id);
    const newTasks = changedTask.map((task) => task.id === id ? {...task, done: !task.done} : task)
    setChangedTask(newTasks)
  }

  
  return (
    <>
      <h1>React App</h1>
      <div>
      <ul>
        {changedTask.map((task) => (
          <li key={task.id}><h3 style={{color: task.done ? '#f443369e' : '#3f51b5', textDecoration: task.done ? 'line-through' : ''}}>{task.text}</h3> 
          {task.day}  <br />  <br /> Note: {task.note}    <br />  <br />      
          
       <button
        onClick={() => { handleCompletedTasks(task.id) }}
       >
          completed
       </button> 
      </li>
        ))}

      </ul>

      </div>
    </>
  )
}

export default App