import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setData } from "../redux/actions/dataActions";
import List from "../components/List";
import Select from "react-select";

const MainPage = ({ options, selectHandler, page, setPage }) => {
  const dispatch = useDispatch();
  let option = "animals";
  const prevPageHandler = () => {
    setPage(page - 1);
  };

  const setInStoreGetedData = async (option, page) => {
    const response = await axios.get(
      `http://0.0.0.0:5001/data/${option}/${page}`
    );
    dispatch(setData(response.data));
  };
  useEffect(() => {
    setInStoreGetedData(option, page);
  }, [page]);

  const nextPageHandler = () => {
    setPage(page + 1);
  };
  return (
    <div>
      <Select options={options} onChange={selectHandler} />
      <List />
      <button onClick={prevPageHandler}>PREV</button>
      <button onClick={nextPageHandler}>NEXT</button>
    </div>
  );
};

export default MainPage;
