import { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControlButtonsIndividual from "./AssignmentControlButtonsIndividual";
import { MdOutlineAssignment } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { setAssignments, deleteAssignment } from "./reducer";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
export default function Assignments() {
  const { cid } = useParams();
  const assignment = {
    _id: "1234", title: "New Assignment", course: cid,
    available: "January 1, 2024, 12:00am", due: "December 31, 2024, 11:59pm",
    pts: 100, text: "New Text",
  }
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const allowEdit = (currentUser.role === "FACULTY")
  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);
  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };
  const dispatch = useDispatch();
  return (
    <div>
      <AssignmentsControls assignment={assignment} /><br />
        <ListGroup className="rounded-0" id="wd-assignments">
          <ListGroup.Item className="wd-assignment-title p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              <IoMdArrowDropdown />
              ASSIGNMENTS
              <AssignmentControlButtons />
            </div>
            <ListGroup className="wd-assigns rounded-0">
              {assignments.map((assignment: any) => (
                <ListGroup.Item className="wd-assignment p-3 ps-1 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center flex-shrink-0">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdOutlineAssignment className="text-success" />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    {allowEdit ? <h5><Link to={`/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`}
                              id="wd-assignment-link" className="text-decoration-none text-black">
                                {assignment.title}
                        </Link>
                    </h5>
                    :
                    <h5 id="wd-assignment-link" className="text-decoration-none text-black">
                      {assignment.title}
                    </h5>}
                    <p className="h6">
                      <span className="text-danger">Multiple Modules</span> |
                      <span className="fw-bold">Not available until</span> <span>{assignment.available}</span> |
                      <span className="fw-bold">Due</span> <span>{assignment.due}</span> |
                      <span>{`${assignment.pts} pts`}</span>
                    </p>
                  </div>
                  <AssignmentControlButtonsIndividual assignmentId={assignment._id}
                    deleteAssignment={(assignmentId) => {removeAssignment(assignmentId)}}/>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
    </div>
  );
}
