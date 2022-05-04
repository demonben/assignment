import React from "react";

const Buttons = (page, setPage) => {
  let firstPage = 1;
  let lastPage = 55;

  const nextPageHandler = () => {
    setPage(page + 1);
  };
  const prevPageHandler = () => {
    setPage(page - 1);
  };
  return (
    <div>
      <button onClick={nextPageHandler}>NEXT</button>
      <button onClick={prevPageHandler}>PREV</button>
    </div>
  );
};

export default Buttons;
