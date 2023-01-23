import React from "react";
import PropTypes from 'prop-types';

import {FaEdit, FaWindowClose} from 'react-icons/fa'
import './Tarefas.css';

export default function Tarefas({tarefas, handleEdit, handleDelete}){
  return(
    <ul className='tarefas'>
      {
        tarefas.map((tarefa, index)=> (
          <li key={tarefa}>{tarefa}
          <div>
            <button onClick={(e) => handleEdit(e, index)} type='submit'><FaEdit /></button>
            <button onClick={(e) => handleDelete(e, index)} type='submit'><FaWindowClose /></button>
          </div>
          </li>
        ))
      }
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};
