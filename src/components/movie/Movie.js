import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ModalMovie from "../modalMovie/ModalMovie";

function Movie(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const imgCard = `https://image.tmdb.org/t/p/w500${props.data.poster_path}`;

  return (
    <div>
      <Card style={{ width: "20rem", height: "20rem" }} className="mainCard">
        <Card.Img variant="top" src={imgCard} className="cardImg" />
        <Card.Body className="cardB">
          <Card.Title>{props.data.title}</Card.Title>
          <div className="button">
            <Button
              className="buttonModal"
              onClick={handleShow}
              style={{ backgroundColor: "rgb(57, 62, 70)", border: "solid " }}
            >
              Show Modal
            </Button>
            {/* <Button
              className="buttonModal"
              style={{ backgroundColor: "rgb(57, 62, 70)", border: "solid " }}
            >
              ❤
            </Button> */}
          </div>
        </Card.Body>
      </Card>


      <ModalMovie
      commentHandler={props.commentHandler}
        modalData={props.data}
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
      />
    </div>
  );
}

export default Movie;
