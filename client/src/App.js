import React, { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { setData, setIsFetching } from "./redux/actions/dataActions";
import { Hearts } from "react-loader-spinner";

function App() {
  const [option, setOption] = useState("animals");
  const isFetching = useSelector((state) => state.store.isFetching);

  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const options = [
    { value: "animals", label: "animals" },
    { value: "Sport", label: "Sport" },
    { value: "work", label: "work" },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setInStoreGetedData = async (option, page) => {
    try {
      dispatch(setIsFetching(true));
      const response = await axios.get(
        `http://0.0.0.0:5001/data/${option}/${page}`
      );

      dispatch(setData(response.data));
      dispatch(setIsFetching(false));
    } catch (e) {
      console.log(e);
    }
  };

  const selectHandler = (e) => {
    setOption(e.value);
  };
  useEffect(() => {
    setInStoreGetedData(option, page);
  }, [option]);

  return (
    <div className="App">
      {isFetching ? (
        <Hearts color="red" height={80} width={80} />
      ) : (
        <MainPage
          options={options}
          selectHandler={selectHandler}
          page={page}
          setPage={setPage}
        ></MainPage>
      )}
    </div>
  );
}

export default App;
