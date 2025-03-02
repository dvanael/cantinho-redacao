import React from "react";
import "./App.css";
import DraftEditor from "./components/DraftEditor";

const App = () => {
  return (
    <div className="app">
      <div className="title">
        <h1>CANTINHO DA REDAÇÃO</h1>
      </div>
      <DraftEditor />
    </div>
  );
};

export default App;
