import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const List = () => {
  const data = useSelector((state) => state.allData.data);
  return (
    <div className="list">
      {data.data &&
        data.data.hits.map((item) => <Item item={item} key={item.id} />)}
    </div>
  );
};

export default List;
