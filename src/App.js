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
      </DataContextProvider>
    </div>
  );
}

export default App;
