import { Form, FormGroup, FormControl, FormLabel, FormSelect, Row, Col, InputGroup, Button } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useParams } from "react-router";
import { assignments, courses } from "../../Database";
import { Link } from "react-router-dom";
export default function AssignmentEditor() {
  const { aid } = useParams();
  const { cid } = useParams();
  const assignment = assignments.find((assignment) => assignment._id === aid);
  const course = courses.find((course) => course._id === cid);
  return (
    <div id="wd-assignments-editor" className="wd-assignments-editor">
      <FormGroup className="mb-3 w-75" controlId="wd-assignment-name">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl defaultValue={`${assignment && assignment.title}`} />
      </FormGroup>
      <FormGroup className="mb-3 w-75" controlId="wd-textarea">
        <FormControl as="textarea" rows={15} defaultValue={`${assignment && assignment.text}`}/>
      </FormGroup>
      <Form.Group as={Row} className="wd-form-name mb-3 w-75">
        <Form.Label column sm={3}>
        Points
        </Form.Label>
        <Col sm={8}>
          <Form.Control  defaultValue={assignment && assignment.pts} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="wd-form-name mb-3 w-75">
        <Form.Label column sm={3}>
        Assignment Group
        </Form.Label>
        <Col sm={8}>
          <FormSelect>
            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </FormSelect>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="wd-form-name mb-3 w-75">
        <Form.Label column sm={3}>
        Display Grade as
        </Form.Label>
        <Col sm={8}>
          <FormSelect>
            <option selected value="percentage">Percentage</option>
            <option value="number">Number</option>
            <option value="letter">Letter</option>
          </FormSelect>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="wd-form-name mb-3 w-75">
        <Form.Label column sm={3}>
          Submission Type
        </Form.Label>
        <Col sm={8} className="border px-3 py-3">
          <FormSelect>
            <option selected value="online">Online</option>
            <option value="physical">Physical</option>
          </FormSelect>
          <br />
          <b>Online Entry Options</b>
          <br />
          <Form.Check label="Text Entry" />
          <Form.Check checked label="Website URL" />
          <Form.Check label="Media Recordings" />
          <Form.Check label="Student Annotation" />
          <Form.Check label="File Uploads" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="wd-form-name mb-3 w-75">
        <Form.Label column sm={3}>
          Assign
        </Form.Label>
        <Col sm={8} className="border px-3 py-3">
          <b>Assign to</b><br />
          <div className="border px-2 py-2">
            <div className="w-25 bg-secondary">&nbsp;Everyone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X</div>
          </div><br />
          <b>Due</b>
          <InputGroup>
            <FormControl defaultValue={`${assignment && assignment.due}`} />
            <InputGroup.Text>
              <FaRegCalendarAlt />
            </InputGroup.Text>
          </InputGroup><br />
          <b>Available from</b>
          <InputGroup className="w-50">
            <FormControl defaultValue={`${assignment && assignment.available}`} />
            <InputGroup.Text>
              <FaRegCalendarAlt />
            </InputGroup.Text>
          </InputGroup>
          <b>Until</b>
          <InputGroup className="w-50">
            <FormControl defaultValue={`${assignment && assignment.due}`} />
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
          <Button variant="danger" size="lg">
            Save
          </Button>
        </Link>
      </div>
    </div>
  );
}
