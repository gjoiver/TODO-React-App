import React from 'react'
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext'
//import './App.css';

// const defaultTodos=[
//   {text: 'Pedir comida', completed: true},
//   {text: 'Tomar el curso de intro de React', completed: false},
//   {text: 'Dar de comer al perro', completed: true}
// ]



function App() {
    

  return ( 
    <TodoProvider>
      <AppUI/>
    </TodoProvider>   
  );
}

export default App;
