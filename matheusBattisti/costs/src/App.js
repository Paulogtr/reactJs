import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contato</Link>
          <Link to='/company'>Empresa</Link>
          <Link to='/newproject'>Novo Projeto</Link>
        </div>
        <Container customClass='min-height'>
        <Routes>
            <Route exact path='/' element={<Home />}  />
            <Route exact path='/Company' element={<Company />} />
            <Route exact path='/Contact' element={<Contact />} />
            <Route exact path='/Newproject' element={<NewProject />} />
        </Routes>
        </Container>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
