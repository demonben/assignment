import React from "react";
import Item from "./Item";

const List = ({ listData }) => {
  return listData.map((item) => <Item item={item} key={item.id}/>);
};

export default List;
