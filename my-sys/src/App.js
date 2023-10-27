import React from "react";
import { PocketContextProvider, usePocket } from "./contexts/PocketContext";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const pb = usePocket();

  return (
    <Router>
      <div>PocketBase: {pb.url}</div>
    </Router>
  );
}

export default App;
