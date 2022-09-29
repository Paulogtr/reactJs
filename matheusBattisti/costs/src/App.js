import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Projects from './components/pages/Projects';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Container customClass='min-height'>
        <Routes>
            <Route exact path='/' element={<Home />}  />
            <Route exact path='/Company' element={<Company />} />
            <Route exact path='/Projects' element={<Projects />} />
            <Route exact path='/Contact' element={<Contact />} />
            <Route exact path='/Newproject' element={<NewProject />} />
        </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
