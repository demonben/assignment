import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setPageNumber } from "../redux/actions/dataActions";

const Buttons = () => {
  const page = useSelector((state) => state.store.page);
  const dispatch = useDispatch();

  let FIRST_PAGE = 1;
  let LAST_PAGE = 55;

  const nextPageHandler = () => {
    dispatch(setPageNumber(page + 1));
  };
  const prevPageHandler = () => {
    dispatch(setPageNumber(page - 1))
  };
  return (
    <div>
      <button onClick={nextPageHandler}>NEXT</button>
      <button onClick={prevPageHandler}>PREV</button>
    </div>
  );
};
      {/* {page <= lastPage && !isLoading && (
          <button onClick={nextPageHandler}>NEXT</button>
        )}
        {page > firstPage && !isLoading && (
          <button onClick={prevPageHandler}>PREV</button>
        )} */}
export default Buttons;
