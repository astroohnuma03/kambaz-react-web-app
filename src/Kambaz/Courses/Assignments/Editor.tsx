import { Form, FormGroup, FormControl, FormLabel, FormSelect, Row, Col, InputGroup, Button } from "react-bootstrap"
import { FaRegCalendarAlt } from "react-icons/fa"
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="wd-assignments-editor">
      <FormGroup className="mb-3 w-75" controlId="wd-assignment-name">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl defaultValue="A1" />
      </FormGroup>
      <FormGroup className="mb-3 w-75" controlId="wd-textarea">
        <FormControl as="textarea" rows={15} defaultValue="This is an example text area"/>
      </FormGroup>
      <Form.Group as={Row} className="wd-form-name mb-3 w-75">
        <Form.Label column sm={3}>
        Points
        </Form.Label>
        <Col sm={8}>
          <Form.Control  defaultValue={100} />
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
            <FormControl defaultValue="May 13, 2024, 11:59 PM" />
            <InputGroup.Text>
              <FaRegCalendarAlt />
            </InputGroup.Text>
          </InputGroup><br />
          <b>Available from</b>
          <InputGroup className="w-50">
            <FormControl defaultValue="May 6, 2024, 12:00 PM" />
            <InputGroup.Text>
              <FaRegCalendarAlt />
            </InputGroup.Text>
          </InputGroup>
          <b>Until</b>
          <InputGroup className="w-50">
            <FormControl defaultValue="May 13, 2024, 11:59 PM" />
            <InputGroup.Text>
              <FaRegCalendarAlt />
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Form.Group>
      <br />
      <hr />
      <div className="wd-editor-btns">
        <Button variant="secondary" size="lg">
          Cancel
        </Button>
        <Button variant="danger" size="lg">
          Save
        </Button>
      </div>
    </div>
    /*
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><b>Assignment Name</b></label><br /><br />
      <input id="wd-name" value="A1" /><br /><br />
      <textarea id="wd-description" rows={10} cols={50}>
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select>
              <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select>
              <option value="Percentage" selected>Percentage</option>
              <option value="Number">Number</option>
              <option value="Letter">Letter</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select>
              <option value="Online" selected>Online</option>
              <option value="Physical">Physical</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-online-entry-check">Online Entry Options</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <input type="checkbox" name="check-online-entry" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <input type="checkbox" name="check-online-entry" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <input type="checkbox" name="check-online-entry" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <input type="checkbox" name="check-online-entry" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <input type="checkbox" name="check-online-entry" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <input type="text" placeholder="Everyone" value="Everyone" id="wd-assign-to"/>
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <input type="date" value="2024-05-13" id="wd-due-date"/>
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-available-until">Until</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <input type="date" value="2024-05-06" id="wd-available-from"/>
          </td>
          <td align="left" valign="top">
            <input type="date" value="2024-05-20" id="wd-available-until"/>
          </td>
        </tr>
      </table>
      <hr />
      <button>Cancel</button>
      <button>Save</button>
    </div>
    */
);}
