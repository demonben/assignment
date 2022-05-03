import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setData } from "../redux/actions/dataActions";
import List from "../components/List";
import Select from "react-select";

const MainPage = ({ options, selectHandler, page, setPage }) => {
  const dispatch = useDispatch();
  let optionDefault = "animals";

  const setInStoreGetedData = async (option, page) => {
    const response = await axios.get(
      `http://0.0.0.0:5001/data/${option}/${page}`
    );
    dispatch(setData(response.data));
  };
  useEffect(() => {
    setInStoreGetedData(optionDefault, 56);
  }, [page]);

  const nextPageHandler = () => {
    setPage(page + 1);
  };
  const prevPageHandler = () => {
    setPage(page - 1);
  };
  return (
    <div>
      <Select options={options} onChange={selectHandler} />
      <List />
      {page <= 55 && <button onClick={nextPageHandler}>NEXT</button>}
      {page > 1 && <button onClick={prevPageHandler}>PREV</button>}
    </div>
  );
};

export default MainPage;
