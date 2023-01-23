import React, {Component} from 'react';

import Form from './Form';
import Tarefas from './Tarefas';

// div principal
import './Main.css';


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

  componentDidMount(){
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if(!tarefas) return;

    this.setState({tarefas});
  }

  componentDidUpdate(prevProps, prevState){
    const {tarefas} = this.state;

    if(tarefas === prevState.tarefas) return;
    console.log('As tarefas mudaram', tarefas);

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }


  render(){
    const {novaTarefa, tarefas} = this.state;

    return(
      <div className='main'>
        <h1>Lista de tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />
        <Tarefas
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tarefas={tarefas}
        />

      </div>
    )
  }
}
