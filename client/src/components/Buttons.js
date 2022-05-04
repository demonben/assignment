import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPageNumber, setData } from "../redux/actions/dataActions";

const Buttons = () => {
  const page = useSelector((state) => state.store.page);
  const dispatch = useDispatch();
  let optionDefault = "animals";

  let FIRST_PAGE = 1;
  let LAST_PAGE = 55;
  // TODO DO FETCH REQ AND SET NEW DATA
  // TODO REFACTOR FETCH REQ NOT FOLLOW DRY

  const nextPageHandler = () => {
    dispatch(setPageNumber(page + 1));
    setInStoreGetedData(optionDefault, page);
  };
  const prevPageHandler = () => {
    dispatch(setPageNumber(page - 1));
    setInStoreGetedData(optionDefault, page);
  };

  const setInStoreGetedData = async (option, page) => {
    try {
      const response = await axios.get(
        `http://0.0.0.0:5001/data/${option}/${page}`
      );
      dispatch(setData(response.data));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      {page <= LAST_PAGE && <button onClick={nextPageHandler}>NEXT</button>}
      {page > FIRST_PAGE && <button onClick={prevPageHandler}>PREV</button>}
    </div>
  );
};

export default Buttons;
