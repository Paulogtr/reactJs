import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name ='Paulo'
  const newName = name.toUpperCase()

  function sum(a,b){
    return a + b
  }

  const url = 'https://source.unsplash.com/random/150x150?'

  return (
    <div className="App">
  <h2>Alterando o jsx</h2>
  <p>Olá, {newName}</p>
  <p>Soma: {sum(2, 2)}</p>
  <img src={url} alt="Minha Imagem" />
  <HelloWorld />
    </div>
  );
}

export default App;
