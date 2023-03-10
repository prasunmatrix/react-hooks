import logo from './logo.svg';
import './App.css';
import React from 'react';
import DataFetching from './components/DataFetching';
import DataFetchingSingle from './components/DataFetchingSingle';
import DataFetchingButtonClick from './components/DataFetchingButtonClick';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <DataFetching /><br/>
      <DataFetchingSingle /><br/>
      <DataFetchingButtonClick /><br/>
    </div>
  );
}

export default App;
