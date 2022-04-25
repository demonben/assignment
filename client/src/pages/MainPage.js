import React from "react";
import List from "../components/List";
import Select from "react-select";

const MainPage = ({ mockData }) => {
  const { hits } = mockData;
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div>
      <Select options={options} />
      <List listData={hits}></List>;
    </div>
  );
};

export default MainPage;
