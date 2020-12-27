//import logo from './logo.svg';
import logo from './Images/silverball.jpg';
import './App.css';
import Routes from './Routes';
import Login from './components/LoginPage';
import {Button} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Group 7's Ornament Shop</h1>
        <Login />
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      </header>
      <Routes />
      <Button color="primary">HelloWorld</Button>
    </div>
  );
}

export default App;
