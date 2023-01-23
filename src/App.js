import React from 'react';
import './App.css';
import Main from './components/Main';

export default function App(){
  // Quando quer retornar mais de uma linha é preciso colocar em uma expressão
  return(
    // Quando se trabalha com o JSX não é possivel retornar elementos na mesma hierarquia
    // <></> = Fragmento(elemento vazio)
    <Main />
  )
}
