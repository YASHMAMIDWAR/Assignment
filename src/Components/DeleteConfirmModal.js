import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsTrash3Fill } from "react-icons/bs";
import { motion } from "framer-motion";

const DeleteConfirmModal = ({ closeModal, ID }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleYes = () => {
    setShow(false);
    closeModal(ID);
  };

  return (
    <>
      <motion.a
        whileTap={{ scale: 0.8 }}
        onClick={handleShow}
        className="btn btn-danger"
      >
        Remove <BsTrash3Fill />
      </motion.a>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Do you want to remove</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <motion.a
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
            onClick={handleClose}
            className="btn btn-secondary"
          >
            Close
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.8 }}
            onClick={handleYes}
            className="btn btn-danger"
            whileHover={{ scale: 1.2 }}
          >
            Yes
          </motion.a>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default DeleteConfirmModal;
