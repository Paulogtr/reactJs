import './App.css';
// import Condicional from './components/Condicionais';
// import HelloWorld from './components/HelloWorld';
// import SayMyName from './components/sayMyName';
// import Pessoa from './components/Pessoa';
// import Frase from './components/frase';
// import List from './components/List';
// import Evento from './components/Evento';
// import Form from './components/Form';

//import OutraLista from "./components/OutraLista";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/empresa" element={<Empresa />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
