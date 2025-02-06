import { FaPlus } from "react-icons/fa6";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </Button>
      <Button variant="secondary" size="lg" className="me-2 float-end" id="wd-add-group-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </Button>
      <InputGroup className="mb-3 w-50" size="lg">
        <InputGroup.Text>
          <CiSearch />
        </InputGroup.Text>
        <FormControl placeholder="Search..." />
      </InputGroup>
    </div>
  );
}