import React from 'react'
import {Container, Head, Hello} from './styles';
//import './index.css'

export default function Users() {
  return (
    <Container>
      <Head>
        <h1>Usuários</h1>
      </Head>
      <Hello color='#589625'>
        Chegou o disco Voador
      </Hello>
    </Container>
  )
}

/*
  <div className='container'>
    <header className='header' >
      <a href="/" className='titulo'>Usuários</a>
    </header>
    <h1>Chegou o disco voador.</h1>
  </div>
*/