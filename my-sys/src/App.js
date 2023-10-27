import React from "react";
import { PocketContextProvider } from "./contexts/PocketContext";
import { BrowserRouter as Router } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <PocketContextProvider>
      <Router>
        <div>My Information System</div>
      </Router>
    </PocketContextProvider>
  );
}

export default App;
