import { useState } from "react";
import { Form, FormGroup, FormControl, FormLabel, Row, Col, InputGroup, Button } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useParams } from "react-router";
import { courses } from "../../Database";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
export default function AssignmentEditor() {
  const { aid } = useParams();
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const [assignment, setAssignment] = useState<any>(
    aid === "1234"
      ? {
          _id: "1234",
          title: "New Assignment",
          course: cid,
          available: "January 1, 2024, 12:00am",
          due: "December 31, 2024, 11:59pm",
          pts: 100,
          text: "New Text",
        }
      : assignments.find((a: any) => a._id === aid) || null
  );
  if (!assignment) return <p>Loading...</p>;
  const course = courses.find((course) => course._id === cid);
  const createAssignmentForCourse = async () => {
    if (!cid) return;
    if (aid !== "1234") return;
    const newAssignment = { ...assignment, course: cid };
    const assignmentServ = await coursesClient.createAssignmentForCourse(cid, newAssignment);
    dispatch(addAssignment(assignmentServ));
  };
  const saveAssignment = async (assignment: any) => {
    await assignmentsClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };
  const dispatch = useDispatch();
  return (
    <div id="wd-assignments-editor" className="wd-assignments-editor">
      <FormGroup className="mb-3 w-75" controlId="wd-assignment-name">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl value={assignment.title}
         onChange={(e) => setAssignment({ ...assignment, title: e.target.value }) } />
      </FormGroup>
      <FormGroup className="mb-3 w-75" controlId="wd-textarea">
        <FormControl as="textarea" rows={15} value={assignment.text}
         onChange={(e) => setAssignment({ ...assignment, text: e.target.value }) } />
      </FormGroup>
      <Form.Group as={Row} className="wd-form-name mb-3 w-75" controlId="wd-assignment-pts">
        <Form.Label column sm={3}>
        Points
        </Form.Label>
        <Col sm={8}>
          <Form.Control  value={assignment.pts}
           onChange={(e) => setAssignment({ ...assignment, pts: e.target.value }) } />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="wd-form-name mb-3 w-75" controlId="wd-assignment-assign">
        <Form.Label column sm={3}>
          Assign
        </Form.Label>
        <Col sm={8} className="border px-3 py-3">
          <b>Due</b>
          <InputGroup id="wd-assignment-due">
            <FormControl value={assignment.due}
             onChange={(e) => setAssignment({ ...assignment, due: e.target.value }) } />
            <InputGroup.Text>
              <FaRegCalendarAlt />
            </InputGroup.Text>
          </InputGroup><br />
          <b>Available from</b>
          <InputGroup className="w-50" id="wd-assignment-available">
            <FormControl value={assignment.available}
             onChange={(e) => setAssignment({ ...assignment, available: e.target.value }) } />
            <InputGroup.Text>
              <FaRegCalendarAlt />
            </InputGroup.Text>
          </InputGroup>
          <b>Until</b>
          <InputGroup className="w-50" id="wd-assignment-until">
            <FormControl defaultValue={assignment.due} />
            <InputGroup.Text>
              <FaRegCalendarAlt />
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Form.Group>
      <br />
      <hr />
      <div className="wd-editor-btns">
        <Link to={`/Kambaz/Courses/${course && course._id}/Assignments`} >
          <Button variant="secondary" size="lg">
            Cancel
          </Button>
        </Link>
        <Link to={`/Kambaz/Courses/${course && course._id}/Assignments`} >
          <Button variant="danger" size="lg"
          onClick={() => {aid === "1234" ? createAssignmentForCourse() : saveAssignment(assignment)}}>
            Save
          </Button>
        </Link>
      </div>
    </div>
  );
}
