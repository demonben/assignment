import React, { useEffect, useState } from "react";
import { mockData } from "./assets/mockData";
import MainPage from "./pages/MainPage";

import "./App.css";
import { getData } from "./lib/api";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=animals"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="App">
     {data && <MainPage mockData={data}></MainPage>}
    </div>
  );
}

export default App;
