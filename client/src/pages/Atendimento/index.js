import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import { RiAddLine } from "react-icons/ri";


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
      <Link className="button" id="novo" to="/novoAtendimento"><RiAddLine id="add" size={20} color="white"/>Novo</Link>
      <div className="content">
      
            <table id="customers">
            <tr>
              <th>ID</th>
              <th>Coordenador</th>
              <th>Assunto</th>
              <th>Descrição</th>
              <th>Data</th>
              <th></th>
            </tr>
          {atendimentos.map(atendimento => (

            <tr key={atendimento.id}>
              <td>{atendimento.id}</td>
              <td>{atendimento.coordenador}</td>
              <td>{atendimento.assunto}</td>
              <td>{atendimento.descricao}</td>
              <td>{atendimento.data}</td>
              <td>
                <button onClick={() => handleDeleteAtendimento(atendimento.id)} type="button">
              <FiTrash2 size={20} color="#A8A8B3"/>
               </button>
                  <button id="editar">
                    <Link className="Editar" to={"/editar/" + atendimento.id}> <FiEdit size={20} color="#A8A8B3"/></Link>
                  </button>  
               </td>
            </tr>
          ))}  

          </table>

             
      </div>
    </div>
  ); 
}

export default Atendimento;