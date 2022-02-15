import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>HOLA MUNDO PARA ENVIAR AL SERVIDOR RASPBERRY PI 4</h2>
        <a href="https://www.youtube.com/watch?v=OUsC13AEiUQ&ab_channel=willy2" target="_blank">Como subir tu aplicación React.js a GitHub Pages paso a paso | Como hacer deploy / npm run build</a>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
