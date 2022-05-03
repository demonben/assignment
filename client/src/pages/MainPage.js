import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setData } from "../redux/actions/dataActions";
import List from "../components/List";
import Select from "react-select";
import { Hearts } from "react-loader-spinner";

const MainPage = ({ options, selectHandler, page, setPage }) => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  let optionDefault = "animals";

  const setInStoreGetedData = async (option, page) => {
    setLoading(true);

    const response = await axios.get(
      `http://0.0.0.0:5001/data/${option}/${page}`
    );
    dispatch(setData(response.data));
    setLoading(false);
  };
  useEffect(() => {
    setInStoreGetedData(optionDefault, page);
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
      <div >
        {page <= 55 && !isLoading && (
          <button onClick={nextPageHandler}>NEXT</button>
        )}
        {page > 1 && !isLoading && (
          <button onClick={prevPageHandler}>PREV</button>
        )}
        <div className="loader">
        {isLoading && <Hearts color="red" height={80} width={80} />}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
