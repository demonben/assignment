import React from "react";
import List from "../components/List";

const MainPage = ({ mockData }) => {
  const { hits } = mockData;
  return <List listData={hits}></List>;
};

export default MainPage;
