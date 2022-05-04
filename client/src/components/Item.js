import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          alt="photo"
          height="300"
          image={previewURL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {tags}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={openModal}>
            Learn More
          </Button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="test"
            ariaHideApp={false}
          >
            
          </Modal>
        </CardActions>
      </Card>
    </div>
  );
};
// <div className="listItem">
//   <button onClick={openModal} className="moduleItemBtn">
//     <h1>{tags}</h1>
//     <img src={previewURL} alt="img"></img>
//   </button>
//   <Modal
//     isOpen={modalIsOpen}
//     onRequestClose={closeModal}
//     contentLabel="test"
//     ariaHideApp={false}
//   >
//     <p>views: {views}</p>
//     <p>downloads: {downloads}</p>
//     <p>collections: {collections}</p>
//     <img src={webformatURL} alt="no web format img"></img>
//   </Modal>
// </div>
export default Item;
