import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ProtectedForms from "./Account/ProtectedForms";
import ProtectedEnroll from "./ProtectedEnroll";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import * as coursesClient from "./Courses/client";
export default function Dashboard(
{ courses, course, setCourse, enrolling, setEnrolling, updateEnrollment }: {
  courses: any[]; course: any; setCourse: (course: any) => void; enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void; updateEnrollment: (courseId: string, enrolled: boolean) => void })
  {
  courses = courses.filter((c) => c !== null);
  const addNewCourse = async () => {
    const newCourse = await coursesClient.createCourse(course);
    dispatch(addCourse(newCourse));
  };
  const deleteCourseServ = async (courseId: string) => {
    await coursesClient.deleteCourse(courseId);
    dispatch(deleteCourse(course._id));
  };
  const updateCourseServ = async () => {
    await coursesClient.updateCourse(course);
    dispatch(updateCourse(course));
  };
  const dispatch = useDispatch();
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
      <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1><hr />
      <ProtectedForms>
        <h5>New Course
            <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse} > Add </button>
            <button className="btn btn-warning float-end me-2"
                  onClick={updateCourseServ} id="wd-update-course-click">
              Update
            </button>
        </h5><br />
        <FormControl value={course.name} className="mb-2" 
              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <FormControl as="textarea" value={course.description} rows={3}
              onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
        <hr />
      </ProtectedForms>
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                <Card.Body className="card-body">
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {course.name} </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    {course.description} </Card.Text>
                  <ProtectedEnroll enrolling={enrolling}>
                    <Link to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                      <Button variant="primary"> Go </Button>
                    </Link>
                  </ProtectedEnroll>
                  <ProtectedForms>
                    <button onClick={(event) => {
                              event.preventDefault();
                              deleteCourseServ(course._id)
                            }} className="btn btn-danger float-end"
                            id="wd-delete-course-click">
                            Delete
                    </button>
                    <button id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end" >
                      Edit
                    </button>
                  </ProtectedForms>
                  {enrolling && (
                    <button onClick={(event) => {
                      event.preventDefault();
                      updateEnrollment(course._id, !course.enrolled);
                      }}
                      className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                      {course.enrolled ? "Unenroll" : "Enroll"}
                    </button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
