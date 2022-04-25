import React, { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";

import { getData } from "./lib/api";
import "./App.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);
  return (
    <div className="App">{data && <MainPage mockData={data}></MainPage>}</div>
  );
}

export default App;
