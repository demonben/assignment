import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setData } from "../redux/actions/dataActions";
import Buttons from "../components/Buttons";
import List from "../components/List";
import Loader from "../components/Loader";
import Select from "react-select";

const MainPage = ({ options, selectHandler, page }) => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
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

  return (
    <div>
      <Select options={options} onChange={selectHandler} />
      <List />
      <div>{!isLoading ? <Buttons setLoading={setLoading} /> : <Loader />}</div>
    </div>
  );
};

export default MainPage;
