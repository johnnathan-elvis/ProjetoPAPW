import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams, } from 'react-router-dom';


import './style.css';

import api from '../../services/api';


const Edicao = props => {
  
  const { id } = useParams();
  const [coordenador, setCoordenador ] = useState('');
  const [assunto, setAssunto ] = useState('');
  const [descricao, setDescricao ] = useState('');
  const [data, setData ] = useState('');
  const [atendimentos, setAtendimentos] = useState([]);  


  const  history = useHistory();

  useEffect(
    () => {
    api.get(`atendimento/${id}`).then(response => {
      setAtendimentos(response.data);

    })
  }, [id]);


  async function handleEditAtendimento(e) {
    e.preventDefault();

    const objeto = {
      coordenador,
      assunto,
      descricao,
      data
    };

    try {
      await api.put(`atendimento/${id}`, objeto)
      history.push('/');
    } catch (error) {

      alert('Erro ao cadastrar o caso, tente novamente.')
      
    }
  }

  return (
    <div className="new-incident-container">
    <div className="content">
      <section>
         <h1>Edita o atendimento</h1> 
      </section>
           

      <form onSubmit={handleEditAtendimento}>
        <input 
          placeholder="Coordenador" 
          value={atendimentos.coordenador}
          onChange={e => setCoordenador(e.target.value)}
          />
        <input 
          placeholder="Assunto" 
          value={atendimentos.assunto}
          onChange={e => setAssunto(e.target.value)}
          />
        <input 
          placeholder="Data" 
          value={atendimentos.data}
          onChange={e => setData(e.target.value)}
          />
        <textarea 
          placeholder="Descrição" 
          value={atendimentos.descricao}
          onChange={e => setDescricao(e.target.value)}
          />
        <button className="button" type="submit" onClick={()=> (
          console.log(atendimentos)
        ) } >Cadastrar</button>
        <button className="button" > <Link id="cor" to={"/"}>Voltar</Link> </button>
      </form>

    </div>
  </div>
  );
}

export default Edicao;



