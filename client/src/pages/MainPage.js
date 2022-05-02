import React from "react";
import List from "../components/List";
import Select from "react-select";

const MainPage = ({ options, selectHandler }) => {

  return (
    <div>
      <Select options={options} onChange={selectHandler} />
      <List />
    </div>
  );
};

export default MainPage;
