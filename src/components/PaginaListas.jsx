import React from "react";
import "../style.css";
import Lista from './Lista';
import ListaClase from './ListaClase';

export  function App(){
  const elementos1 = [
    {texto: 'Descomer', prioridad:'alta'}, 
    {done: true ,texto:'Comer'},
    {texto:'Ducharse', prioridad:'media'},
    {texto:'Lavar la ropa'},
    {texto:'Limpiar', prioridad:'media'},
  ];
  const elementos2 = [
    {texto:'Aprender JavaScript', prioridad:'alta'},
  ];
  const elementos3 = [
    {done: true, texto:'Pintura', prioridad:'media'},
    {texto:'Fruta'},
    {texto:'Pan', prioridad:'alta'}
  ];
  return (
    <div>
      <h1>Lista de Tareas </h1>
      <Lista titulo = "Tareas de la casa" icono ="🏡" elementos={elementos1}/>
      <ListaClase titulo = "Tareas de clase" icono ="📚" elementos={elementos2}/>
      <ListaClase titulo = "Lista de la compra" icono ="🛒" elementos={elementos3}/>
    </div>
    );
}