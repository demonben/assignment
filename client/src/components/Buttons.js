import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPageNumber, setData } from "../redux/actions/dataActions";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Buttons = ({ setLoading, option }) => {
  const page = useSelector((state) => state.store.page);
  const dispatch = useDispatch();

  let FIRST_PAGE = 1;
  let LAST_PAGE = 55;

  const nextPageHandler = () => {
    dispatch(setPageNumber(page + 1));

    setInStoreGetedData(option, page);
  };
  const prevPageHandler = () => {
    dispatch(setPageNumber(page - 1));
    setInStoreGetedData(option, page);
  };

  const setInStoreGetedData = async (option, page) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://0.0.0.0:5001/data/${option}/${page}`
      );
      dispatch(setData(response.data));
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  return (
    <div>
      <Stack spacing={2} direction="row" justifyContent="center">
        {page <= LAST_PAGE && (
          <Button onClick={nextPageHandler} variant="contained">
            NEXT
          </Button>
        )}
        {page > FIRST_PAGE && (
          <Button onClick={prevPageHandler} variant="contained">
            PREV
          </Button>
        )}
      </Stack>
    </div>
  );
};

export default Buttons;
