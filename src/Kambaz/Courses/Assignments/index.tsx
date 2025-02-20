import ListGroup from "react-bootstrap/ListGroup"
import { BsGripVertical } from "react-icons/bs"
import AssignmentsControls from "./AssignmentsControls"
import AssignmentControlButtons from "./AssignmentControlButtons"
import LessonControlButtons from "../Modules/LessonControlButtons"
import { MdOutlineAssignment } from "react-icons/md"
import { IoMdArrowDropdown } from "react-icons/io"
import { Link } from "react-router-dom"
import { useParams } from "react-router"
import * as db from "../../Database";
export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div>
      <AssignmentsControls /><br />
        <ListGroup className="rounded-0" id="wd-assignments">
          <ListGroup.Item className="wd-assignment-title p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              <IoMdArrowDropdown />
              ASSIGNMENTS
              <AssignmentControlButtons />
            </div>
            <ListGroup className="wd-assigns rounded-0">
              {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => (
                <ListGroup.Item className="wd-assignment p-3 ps-1 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center flex-shrink-0">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdOutlineAssignment className="text-success" />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <h5><Link to={`/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`}
                              id="wd-assignment-link" className="text-decoration-none text-black">
                                {assignment.title}
                        </Link>
                    </h5>
                    <p className="h6">
                      <span className="text-danger">Multiple Modules</span> |
                      <span className="fw-bold">Not available until</span> <span>{assignment.available}</span> |
                      <span className="fw-bold">Due</span> <span>{assignment.due}</span> |
                      <span>{`${assignment.pts} pts`}</span>
                    </p>
                  </div>
                  <LessonControlButtons />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
    </div>
  );
}
