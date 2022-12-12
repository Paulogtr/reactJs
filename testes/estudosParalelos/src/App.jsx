import React, { useState } from 'react'
import './App.css'

import Tasks from './components/Tasks';

function App() {

  let [task, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },

  ]);


  return (
    <div className="App">
      <h1>Fazendo testes</h1>
      <Tasks data={task} />
    </div>
  )
}

export default App
