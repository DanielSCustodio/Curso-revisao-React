import React from 'react'

export default function Forms() {
  const [ name, setName ] = React.useState();
  const [ email, setEmail ] = React.useState();
  const [ age, setAge ] = React.useState(0);
  const [user, setUser] = React.useState({});

  function handleRegister (e){
    e.preventDefault();
    alert('Registrado com sucesso');
    setUser(
      {
        name,
        email,
        age,
      }
    )
  }
  return (
    <div>
      <form onSubmit={handleRegister}>
        <label htmlFor='name'>Nome </label>
        <input 
          id="name" 
          placeholder='Digite seu nome' 
          value = {name}
          onChange ={({target:{value}})=> setName(value)}
        />
        <br />
        <br />

        <label htmlFor='email'>Email </label>
        <input 
          type="email"
          id="email" 
          placeholder='Digite seu email' 
          value = {email}
          onChange ={({target:{value}})=> setEmail(value)}
          />
        <br />
        <br />

        <label htmlFor='idade'>Idade </label>
        <input 
          type="number"
          id="idade" 
          placeholder='Digite sua idade' 
          value = {age}
          onChange ={({target:{value}})=> setAge(value)}
        />
        <br />
        <br />

        <button type='submit'>Registrar</button>
      </form>

      <div>
        <p>Nome: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Idade: {user.age}</p>
      </div>
    </div>
  )
}
