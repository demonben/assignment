import React, { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import axios from "axios";
import { useDispatch } from "react-redux";
import "./App.css";
import { setData } from "./redux/actions/dataActions";

function App() {
  const [option, setOption] = useState("animals");
  const dispatch = useDispatch();

  const options = [
    { value: "animals", label: "animals" },
    { value: "Sport", label: "Sport" },
    { value: "work", label: "work" },
  ];

  const setInStoreGetedData = async (option) => {
    const response = await axios.get(`http://0.0.0.0:5001/data/${option}`);
    dispatch(setData(response.data));
  };

  const selectHandler = (e) => {
    setOption(e.value);
  };
  useEffect(() => {
    setInStoreGetedData(option);
  }, [option]);

  return (
    <div className="App">
      <MainPage options={options} selectHandler={selectHandler}></MainPage>
    </div>
  );
}

export default App;
