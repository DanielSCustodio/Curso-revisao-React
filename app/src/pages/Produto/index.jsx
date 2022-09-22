import React from 'react'
import { useParams } from 'react-router-dom';

export default function Produto() {
  const {slug} = useParams();

  return (
    <div>
      <h2>Produtos</h2>
      <span>ID do produto: {slug} </span>
    </div>
  )
}
