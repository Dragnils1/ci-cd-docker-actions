import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react'
import axios from 'axios';

function App() {

  const [increament, setincreament] = useState(0);
  const [ax, setax] = useState('Here u will see text from ');


  const incFunk = () => setincreament(increament + 1)
  const decFunk = () => setincreament(increament - 1)

  useEffect(() => {
    axios
      .get('http://localhost:8000/')
      .then(response => (setax(response.data)));
  }, [increament]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <button onClick={() => incFunk() }>+</button>
        <button onClick={() => decFunk() } >-</button>
        <p data-testid="p1">{increament}</p>
        <p>{ax}</p>
      </header>
    </div>
  );
}

export default App;
