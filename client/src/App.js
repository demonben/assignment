import React from "react";
import { mockData } from "./assets/mockData";
import MainPage from "./pages/MainPage";

import "./App.css";

function App() {
  return <div className="App">
    <MainPage mockData={mockData}></MainPage>
  </div>;
}

export default App;
