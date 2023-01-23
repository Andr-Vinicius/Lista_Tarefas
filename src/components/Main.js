import React, {Component} from 'react';

// div principal
import './Main.css';

// Formulário
import {FaPlus} from 'react-icons/fa'

// Tarefas
import {FaEdit, FaWindowClose} from 'react-icons/fa'

// Um componente que teme estado
export default class Main extends Component {
  // Não precisa faze ro bind do this, uso do class field
  state = {
      novaTarefa: '',
      tarefas: [],
      index: -1
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const {tarefas, index} = this.state;
    let {novaTarefa} = this.state;
    novaTarefa = novaTarefa.trim();

    // Estudar indexOf
    if(tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    if(index === -1){
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: ''
      });
    }else{
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1
      });
    }

  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  handleDelete = (e, index) =>{
    const {tarefas} = this.state;
    const novasTarefas = [...tarefas];

    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
      novaTarefa: ''
    });
  }

  handleEdit = (e, index) =>{
    const {tarefas} = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  }



  render(){
    const {novaTarefa, tarefas} = this.state;

    return(
      <div className='main'>
        <h1>Lista de tarefas</h1>

        <form onSubmit={this.handleSubmit} action='#' className='form'>
          <input
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
          />
          <button type='submit'>
            <FaPlus />
          </button>
        </form>

        <ul className='tarefas'>
          {
            tarefas.map((tarefa, index)=> (
              <li key={tarefa}>{tarefa}
              <div>
                <button onClick={(e) => this.handleEdit(e, index)} type='submit'><FaEdit /></button>
                <button onClick={(e) => this.handleDelete(e, index)} type='submit'><FaWindowClose /></button>
              </div>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}