import React from "react";
import List from "../components/List";
import Select from "react-select";

const MainPage = ({ data, options, selectHandler }) => {
  const { hits } = data;

  return (
    <div>
      <Select options={options} onChange={selectHandler} />
      <List listData={hits}></List>;
    </div>
  );
};

export default MainPage;
