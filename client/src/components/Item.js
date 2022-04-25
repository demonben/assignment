import React, { useState } from "react";
import Modal from "react-modal";

const Item = ({ item }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { tags, previewURL, views, downloads, collections } = item;

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>
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
      </Modal>
    </div>
  );
};

export default Item;
