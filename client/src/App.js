import React, { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import { getData } from "./lib/api";
import "./App.css";

function App() {

  const [data, setData] = useState();
  const [option, setOption] = useState("animals");


  const options = [
    { value: "animals", label: "animals" },
    { value: "Sport", label: "Sport" },
    { value: "work", label: "work" },
  ];
  const selectHandler = (e) => {
    setOption(e.value);
  };

  useEffect(() => {
    getData(option).then((data) => setData(data));
  }, [option]);

  return (
    <div className="App">
      {data && (
        <MainPage
          data={data}
          options={options}
          selectHandler={selectHandler}
        ></MainPage>
      )}
    </div>
  );
}

export default App;
