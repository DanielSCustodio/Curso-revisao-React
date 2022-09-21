import React from 'react'

export default function Lists() {

  const[input, setInput] = React.useState('');
  const[tasks, setTasks] = React.useState([]);

  function handleRegister (e){
    e.preventDefault();
    setTasks([...tasks, input])
    setInput('')
  }

  return (
    <div>
      <h2>Registro de Tarefas</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor='name'>Nome </label>
        <input 
          id="task" 
          placeholder='Digite a tarefa' 
          value = {input}
          onChange ={({target:{value}})=> setInput(value)}
        />
        <button type='submit'>Registrar</button>
      </form>
      <div>
      <h2>Tarefas</h2>
      <ul>
        {tasks.map(task=>(
          <li key={task}>{task}</li>
        ))}
      </ul>
      </div>
    </div>
  )
}
