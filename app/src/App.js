import React from 'react'
import Name from './components/Name'

export default function App() {
  const [help, setHelp] = React.useState('Socorro');

  return (
    <div>
      <h1>DC Comics</h1>
      <span>{help}</span>
      <br/>
      <Name name="Batman"/>

      <button onClick={()=> setHelp(help+"o")}>GRITAR</button>
    </div>
  )
}
