// App.jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Greeting from './Greeting'; // Importer Greeting komponenten
import GreetingWithName from './GreetingWithName'; // Importer GreetingWithName komponenten
import CounterButton from './CounterButton'; // Importer CounterButton komponenten
import LoggerComponent from './LoggerComponent'; // Importer LoggerComponent komponenten

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Opfrisker</h1>
      <Greeting /> {/* Brug af Greeting komponenten */}
      <GreetingWithName name="Name" /> {/* Send name prop til GreetingWithName komponenten */}
      <CounterButton /> {/* Brug af CounterButton komponenten */}
      <LoggerComponent /> {/* Brug af LoggerComponent komponenten */}
    </>
  );
}

export default App;