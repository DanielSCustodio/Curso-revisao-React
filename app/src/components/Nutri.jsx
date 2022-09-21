import React from 'react'
import './nutri.css';
  //https://sujeitoprogramador.com/rn-api/?api=posts

export default function Nutri() {

  const [data, setData] = React.useState([]);

  React.useState(()=>{
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    function fetchApi(){
      fetch(url)
      .then((response)=> response.json())
      .then((json)=>{
        setData(json)
      });
    }
    
    fetchApi()
  },[]);

  return (
    <div className='container'>
      <header>
        <strong>Nutri</strong>
      </header>
      {data && data.map((item)=>(
          <article key={item.id} className="post">
            <strong className="title">{item.titulo}</strong>
            <span className="category">{item.categoria}</span>
            <img src={item.capa} alt={item.titulo} className="cover"/>
            <p className="subtitle">{item.subtitulo} </p>
            <a href="/"className="btn">Acessar</a>
          </article>
        ))}
    </div>
  )
}
