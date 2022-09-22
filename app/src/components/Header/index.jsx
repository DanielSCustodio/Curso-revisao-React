import React from 'react';
import {Link} from 'react-router-dom';

export default function index() {
  return (
    <header>
      <Link to="/">Home </Link>
      <Link to="/sobre">Sobre </Link>
      <Link to="/contato">Contato</Link>
    </header>
  )
}
