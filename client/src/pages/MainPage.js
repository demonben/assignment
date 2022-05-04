import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setData } from "../redux/actions/dataActions";
import Buttons from "../components/Buttons";
import List from "../components/List";
import Loader from "../components/Loader";
import Select from "react-select";

const MainPage = ({ options, selectHandler, page, setPage }) => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  let firstPage = 1;
  let lastPage = 55;
  let optionDefault = "animals";

  const setInStoreGetedData = async (option, page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://0.0.0.0:5001/data/${option}/${page}`
      );
      dispatch(setData(response.data));
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  };
  useEffect(() => {
    setInStoreGetedData(optionDefault, page);
  }, [page]);

  // TODO: MAKE COMPONENT WITH BUTTONS
  // TODO: REMOVE DEFINE WITH CAPITALS_ NUMBERS
  return (
    <div>
      <Select options={options} onChange={selectHandler} />
      <List />
      <Buttons setPage={setPage} page={page}></Buttons>
      <div>
        {/* {page <= lastPage && !isLoading && (
          <button onClick={nextPageHandler}>NEXT</button>
        )}
        {page > firstPage && !isLoading && (
          <button onClick={prevPageHandler}>PREV</button>
        )} */}
        <Loader />
      </div>
    </div>
  );
};

export default MainPage;
