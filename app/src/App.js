import React from 'react'
import Forms from './components/Forms';
import Lists from './components/Lists';
import Name from './components/Name'

export default function App () {
  const [ help, setHelp ] = React.useState( 'Socorro' );


  return (
    <div>
      <Lists/>
      <br />
      <h1>DC Comics</h1>
      <span>{ help }</span>
      <br />
      <Name name="Batman" />
      <button onClick={ () => setHelp( help + "o" ) }>GRITAR</button>
      <br />
      <br />
      <br />
      <Forms/>
    </div>
  )
}
