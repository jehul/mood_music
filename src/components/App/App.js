import React from "react";
import "./App.css";

import TestComponent from "../TestComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TestComponent message1="What up" message2="Up dog" />
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
