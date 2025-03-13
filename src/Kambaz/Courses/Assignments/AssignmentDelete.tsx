import { Modal, Button } from "react-bootstrap";
export default function AssignmentDelete({ show, assignmentId, handleClose, deleteAssignment, }: {
  show: boolean; assignmentId: string; handleClose: () => void; deleteAssignment: (assignmentId: string) => void; }) {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Cancel </Button>
          <Button variant="primary"
           onClick={() => {
            deleteAssignment(assignmentId);
            handleClose();
           }} > Ok </Button>
        </Modal.Footer>
      </Modal>
    );
  }