import logo from './logo.svg';
import './App.css';
import Componenta from './components/componenta';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Componenta name='John' lastname='Jejen' email='nn@nn.nn'></Componenta>
      </header>
    </div>
  );
}

export default App;
