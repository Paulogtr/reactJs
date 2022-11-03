//CSS
import './App.css'

// React
import { useCallback, useEffect, useState } from 'react'

//data
import {wordsList} from './data/words'

//components
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  {id:1, name: 'start'},
  {id:2, name: 'game'},
  {id:3, name: 'end'},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList)

  const [pickedWord,setPickedWord] = useState("")
  const [pickedCategory,setPickedCategory] = useState("")
  const [letters,setletters] = useState([])

  const pickWordAndCategory = () => {
    const categories = Object.keys(words)
    const category =
    categories[Math.floor(Math.random() * Object.keys(categories).length)]

    console.log(category)

    const word = words[category][(Math.random() * words[category].length)]

    return {word, category}
  }


// starts the game
  const startGame = () =>{

   const {word, category} = pickWordAndCategory()

   console.log(word, category)

    setGameStage(stages[1].name)
  }

  // process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  // restarts the game
  const retry = () => {
    setGameStage(stages[0].name)
  }
  
  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver retry={retry} />}

    </div>
  )
}

export default App
