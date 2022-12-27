import React, { useState } from 'react'
import './App.css'

import Tasks from './components/Tasks';
import ComponenteDinamico from './components/ComponenteDinamico';
import { HookUseContext } from './components/HookUseContext';

import { useContext } from 'react';
import { SomeContext } from './components/HookUseContext';

function App() {

  const {contextValue} = useContext(SomeContext)

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
      <ComponenteDinamico />
    </div>
  )
}

export default App
