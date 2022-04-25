import React from "react";


const Item = ({ item }) => {
  const { tags, previewURL } = item;
  return (
    <div>
      <h1>{tags}</h1>
      <img src={previewURL} alt="img"></img>
    </div>
  );
};

export default Item;
