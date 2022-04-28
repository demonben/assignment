import React, { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import { useSelector, useDispatch } from "react-redux";
import { getDataAsync } from "./redux/dataSlice";
import { getData } from "./lib/api";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [option, setOption] = useState("animals");
  const dataFromStore = useSelector((state) => state.data);

  const options = [
    { value: "animals", label: "animals" },
    { value: "Sport", label: "Sport" },
    { value: "work", label: "work" },
  ];
  const selectHandler = (e) => {
    setOption(e.value);
  };

  useEffect(() => {
    dispatch(getDataAsync());
    getData(option).then((data) => setData(data));
  }, [option, dispatch]);

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
