import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { FiPower, FiTrash2 } from 'react-icons/fi';


import './style.css';

import api from '../../services/api';



const Atendimento = props => {
  const [atendimentos, setAtendimentos] = useState([]);  

  useEffect(() => {
    api.get(`atendimento`).then(response => {
      setAtendimentos(response.data);
    })
  }, []);
  
  async function handleDeleteAtendimento(id) {
    try {
      await api.delete(`atendimento/${id}`);
      
      setAtendimentos(atendimentos.filter(atendimentos => atendimentos.id != id))
    } catch (error) {
      alert('Erro ao deletar o caso, tente novamente.')
    }
    
  }

  return (
    <div>
      <Link className="button" id="novo" to="/novoAtendimento">Cadastrar novo caso</Link>
      <div className="content">
        <ul>
          {atendimentos.map(atendimento => (
              <li key={atendimento.id}>
              <div className="gordura"> 
              <strong>id: </strong>
              <p>{atendimento.id}</p>               
              </div>
              <div className="gordura"> 
              <strong>coordenador: </strong>
              <p>{atendimento.coordenador}</p>
              </div>
              <div className="gordura"> 
              <strong>assunto:</strong>
              <p>{atendimento.assunto}</p>
              </div>
              <div className="gordura"> 
              <strong>descricao:</strong>
              <p>{atendimento.descricao}</p>
              </div>
              <div className="gordura"> 
              <strong>data:</strong>
              <p>{atendimento.data}</p>
              </div>
              <button onClick={() => handleDeleteAtendimento(atendimento.id)} type="button">
              <FiTrash2 size={20} color="#A8A8B3"/>
              </button>
            
              <Link className="Editar" to={"/editar/" + atendimento.id}>Editar</Link> 
            
            </li>  
          ))}  
        </ul>
      </div>
    </div>
  ); 
}

export default Atendimento;