import React from 'react'
import './style.css'


const App = () => {
 
 const tasks = [
  {id: 1, text: "Doctor's appointment", day: 'Feb 5th at 2:30pm', done: false, note: 'Take the dog with me'},
  {id: 2, text: 'Meeting at school', day: 'Feb 6th at 1:30pm', done: false, note: 'take document'},
  {id: 3, text: 'Food shopping', day: 'Feb 5th at 2:30pm', done: false, note: 'dont forget cc'},
  {id: 4, text: 'Meeting with the team', day: 'Feb 6th at 1:30pm', done: false, note: 'take the document'},
  {id: 5, text: 'Dentist', day: 'Feb 5th at 2:30pm', done: false, note: "Take the X ray"},
  {id: 6, text: 'Meeting with the boss', day: 'Feb 6th at 1:30pm', done: false, note: 'No comment'},
  ]
  const [changedTask, setChangedTask] = React.useState(tasks)
  const [search, setSearch] = React.useState('')

  const handleCompletedTasks = (id) => {
  //  console.log(id);
    const newTasks = changedTask.map((task) => task.id === id ? {...task, done: !task.done} : task)
    setChangedTask(newTasks)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
   // setChangedTask(tasks.filter((task) => task.text.toLowerCase().includes(search.toLowerCase())))
  }
   
  const handleDelete = (id) => {
    const newTasks = changedTask.filter((task) => task.id !== id)
    setChangedTask(newTasks)
  }

  
  return (
    <>
      <h1 style={{padding: '0 35px'}}>Task list</h1>
      <div style={{padding: '0 35px'}}>
          <label>Seach task</label> <br /> 
          <input type="text"
          placeholder="Search task"
          onChange={handleSearch}
          />
      </div>
      <div>
      <ul>
        {changedTask.filter((task) => task.text.toLowerCase().includes(search.toLowerCase())).map((task) => (
          <li 
          className={task.done ? 'completed' : ''}
          key={task.id}><h3 style={{
            color: task.done ? '#f443369e' : '#3f51b5', 
            textDecoration: task.done ? 'line-through' : '',
          //  backgroundColor: task.done ? '#8080804d' : '',
            }}>{task.text}</h3> 
          {task.day}  <br />  <br /> Note: {task.note}    <br />  <br />      
        <span style={{display: 'flex', justifyContent: 'space-between'}}>
            <button
              onClick={() => { handleCompletedTasks(task.id) }}
            >
                completed
            </button> 
            <button style={{background: 'red'}} onClick={() => handleDelete(task.id)}>
              delete
            </button>

        </span>  
      </li>
        ))}

      </ul>

      </div>
    </>
  )
}

export default App