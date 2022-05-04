import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "react-modal";
import ClearIcon from '@mui/icons-material/Clear';


const Item = ({ item }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { tags, previewURL, webformatURL, views, downloads, collections,id,likes,comments } =
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
          <ClearIcon onClick={closeModal}></ClearIcon>
            <Typography  variant="h6" component="h2">
              {tags}
            </Typography>
            <Typography  sx={{ mt: 2 }}>
            id: {id}
            </Typography>
            <Typography  sx={{ mt: 2 }}>
            likes: {likes}
            </Typography>
            <Typography  sx={{ mt: 2 }}>
            comments: {comments}
            </Typography>
            <Typography  sx={{ mt: 2 }}>
            views: {views}
            </Typography>
            <Typography  sx={{ mt: 2 }}>
            downloads: {downloads}
            </Typography>
            <Typography  sx={{ mt: 2 }}>
            collections: {collections}
            </Typography>
            <CardMedia
          component="img"
          alt="photo"
          image={webformatURL}
        />
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
