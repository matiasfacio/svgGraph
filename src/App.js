import React from "react";
import GermanyStates from "./components/GermanyStates";
import Header from "./components/Header";
import DataContextProvider from "./contexts/DataContext";
import './style.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <DataContextProvider>
        <GermanyStates />
        <canvas id = "canvas" width = "80vw" height = "80vh"></canvas>
        <canvas id = "canvas2" width = "80vw" height = "80vh"></canvas>
      </DataContextProvider>
    </div>
  );
}

export default App;
