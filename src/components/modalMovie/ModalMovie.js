import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalMovie({
  handleShow,
  handleClose,
  show,
  modalData,
}) {
  const imgCard = `https://image.tmdb.org/t/p/w500${modalData.poster_path}`;

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imgCard} className="modalImg" />
          <p>{modalData.overview}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleClose}
            className="buttonM"
            style={{ backgroundColor: "rgb(57, 62, 70)", border: "solid " }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
