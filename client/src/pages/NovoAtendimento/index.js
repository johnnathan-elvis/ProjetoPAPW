import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


import './style.css';

import api from '../../services/api';


const NovoAtendimento = props => {
  const [coordenador, setCoordenador ] = useState('');
  const [assunto, setAssunto ] = useState('');
  const [descricao, setDescricao ] = useState('');
  const [data, setData ] = useState('');

  const  history = useHistory();

  async function handleNewAtendimento(e) {
    e.preventDefault();
    
    const objeto = {
      coordenador,
      assunto,
      descricao,
      data
    };

    try {
      await api.post('atendimento', objeto)
      history.push('/');
    } catch (error) {

      alert('Erro ao cadastrar o caso, tente novamente.')
      
    }
  }

  return (
    <div className="new-incident-container">
    <div className="content">
      <section>
         <h1>Cadastro de novo Atendimento</h1>       
      </section>

      <form onSubmit={handleNewAtendimento}>
        <input 
          placeholder="Coordenador" 
          value={coordenador}
          onChange={e => setCoordenador(e.target.value)}
          />
        <input 
          placeholder="Assunto" 
          value={assunto}
          onChange={e => setAssunto(e.target.value)}
          />
        <input 
          placeholder="Data" 
          value={data}
          onChange={e => setData(e.target.value)}
          />
        <textarea 
          placeholder="Descrição" 
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
          />
        <button className="button" type="submit">Cadastrar</button>
        <button className="button" > <Link id="cor" to={"/"}>Voltar</Link> </button>
      </form>
      
    </div>
  </div>
  );
}

export default NovoAtendimento;
