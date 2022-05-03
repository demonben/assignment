import React, { useState } from "react";
import Modal from "react-modal";

const Item = ({ item }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { tags, previewURL, webformatURL, views, downloads, collections } =
    item;

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="listItem">
      <button onClick={openModal} className="moduleItemBtn">
        <h1>{tags}</h1>
        <img src={previewURL} alt="img"></img>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="test"
        ariaHideApp={false}
      >
        <p>views: {views}</p>
        <p>downloads: {downloads}</p>
        <p>collections: {collections}</p>
        <img src={webformatURL} alt="no web format img"></img>
      </Modal>
    </div>
  );
};

export default Item;
