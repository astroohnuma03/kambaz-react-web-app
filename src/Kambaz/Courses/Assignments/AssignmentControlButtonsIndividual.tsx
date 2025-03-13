import { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import AssignmentDelete from "./AssignmentDelete";
import ProtectedForms from "../../Account/ProtectedForms";
export default function AssignmentControlButtonsIndividual({ assignmentId, deleteAssignment }:
  { assignmentId: string; deleteAssignment: (assignmentId: string) => void; }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="float-end">
      <ProtectedForms>
        <FaTrash className="text-danger me-2 mb-1" onClick={handleShow}/>
      </ProtectedForms>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <AssignmentDelete show={show} assignmentId={assignmentId}
        handleClose={handleClose} deleteAssignment={deleteAssignment}/>
    </div>
  );
}