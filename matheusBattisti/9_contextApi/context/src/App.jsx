import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import About from './pages/About'
import Home from './pages/Home'
import Products from './pages/Products'

import './App.css'
import Navbar from './components/Navbar'



function App() {
  
  return (
    <div className="App">
      <h1>Context API</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
