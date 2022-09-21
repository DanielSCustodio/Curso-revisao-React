import React from 'react'

export default function Effect() {
  const [ help, setHelp ] = React.useState( 'Socorro' );

  return (
    <div>
      <h1>DC Comics</h1>
      <span>{ help }</span>
      <br />
      <button onClick={ () => setHelp( help + "o" ) }>GRITAR</button>
    </div>
  )
}
