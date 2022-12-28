import { useState } from 'react'
import './App.css'

function App() {
  const [eixo, setEixo] = useState([])
  const [undid, setUndid] = useState([])

  const handleClick = (e) => {
    const newCirclo = {
      clientX: e.clientX,
      clientY: e.clientY
    }
    setEixo((prev) => [...prev, newCirclo]);
    console.log(newCirclo)
    setUndid([])
  }

  const handleUndo = (e) => {
    e.stopPropagation()

    if (eixo.length === 0) {
      return
    }

    const lastItem = eixo[eixo.length - 1];
    setUndid((prev) => [...prev, lastItem]);

    setEixo((prev) => [...prev].slice(0, -1));
  }

  const handleRedo = (e) => {
    e.stopPropagation();

    if (undid.length === 0) {
      return
    }

    const recovereDot = undid[undid.length - 1]
    setUndid((prev) => {
      const newArr = [...prev].slice(0, -1)
      return newArr
    });
    setEixo((prev) => [...prev, recovereDot])

  }
  return (
    <div className="App" onClick={handleClick}>
      <button onClick={handleUndo}>Desfazer</button>
      <button onClick={handleRedo}>Refazer</button>
      {eixo.map((item) => (
        <span className='circlo'
          style={{ left: item.clientX, top: item.clientY }}></span>
      ))}

    </div>
  )
}

export default App
