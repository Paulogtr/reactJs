import './App.css';
// import HelloWorld from './components/HelloWorld';
import SayMyName from './components/sayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/frase';
import List from './components/List';

function App() {
  const nome = 'Maria'

  return (
    <div className="App">
      <Frase />
      <Frase />
      <SayMyName nome="Matheus" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
        foto="https://source.unsplash.com/random/150x150?"
      />
      <List />
    </div>
  );
}

export default App;
