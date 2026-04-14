// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./components/PlayersList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>FIFA Player Cards</h1>
      <div className="players-container">
        <PlayersList />
      </div>
      <footer className="app-footer">
        <p>© 2026 FIFA Player Cards desgined by Yassine Kalthoum with ❤️ All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;