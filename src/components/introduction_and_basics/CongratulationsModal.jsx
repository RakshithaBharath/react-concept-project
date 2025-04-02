import React from "react";
import { Button, Modal } from "react-bootstrap";

const CongratulationsModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Congratulations!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Keep learning. This is just the beginning. We have a long way to go!
        </p>
        <p>
          Enjoying your journey with React! I hope you are Loving it the way we
          are moving so far ??
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CongratulationsModal;
