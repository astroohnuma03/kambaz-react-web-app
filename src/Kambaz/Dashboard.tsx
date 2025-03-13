import { useState } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ProtectedForms from "./Account/ProtectedForms";
import ProtectedEnroll from "./ProtectedEnroll";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import { addEnrollment, deleteEnrollment } from "./Courses/Enroll/reducer";
export default function Dashboard(
{ courses, course, setCourse, }: {
    courses: any[]; course: any; setCourse: (course: any) => void; })
  {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const enrolledIn = courses.filter((course) => enrollments.some(
    (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id))
  const [showAll, setShowAll] = useState<boolean>(false)
  const dispatch = useDispatch();
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        <button className="btn btn-primary float-end"
                id="wd-enrollments-btn"
                onClick={() => setShowAll((prev) => !prev)}> Enrollments </button>
      </h1><hr />
      <ProtectedForms>
        <h5>New Course
            <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={() => dispatch(addCourse(course))} > Add </button>
            <button className="btn btn-warning float-end me-2"
                  onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
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
          {showAll ? courses.map((course) => {
            const isEnrolled = enrolledIn.some((enrolled) => enrolled._id === course._id);
            const enrollment = enrollments.find((e: any) => e.user === currentUser._id && e.course === course._id);
            return (
              <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </Card.Text>
                    <ProtectedEnroll enrollment={enrollment}>
                      <Link to={`/Kambaz/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                        <Button variant="primary"> Go </Button>
                      </Link>
                    </ProtectedEnroll>
                    <ProtectedForms>
                      <button onClick={(event) => {
                                event.preventDefault();
                                dispatch(deleteCourse(course._id));
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
                    {isEnrolled ? 
                      <button className="btn btn-danger"
                      onClick={() => dispatch(deleteEnrollment(enrollment._id))}> Unenroll </button>
                      :
                      <button className="btn btn-success"
                      onClick={() => dispatch(addEnrollment({ user: currentUser._id, course: course._id }))}> Enroll </button>
                    }
                  </Card.Body>
                </Card>
              </Col>
          )}) : courses
          .filter((course) =>
            enrollments.some(
              (enrollment: any) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
              ))
              .map((course) => {
                const isEnrolled = enrolledIn.some((enrolled) => enrolled._id === course._id);
                const enrollment = enrollments.find((e: any) => e.user === currentUser._id && e.course === course._id);
                return (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                <Card.Body className="card-body">
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {course.name} </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    {course.description} </Card.Text>
                  <ProtectedEnroll enrollment={enrollment}>
                    <Link to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                      <Button variant="primary"> Go </Button>
                    </Link>
                  </ProtectedEnroll>
                  <ProtectedForms>
                    <button onClick={(event) => {
                              event.preventDefault();
                              dispatch(deleteCourse(course._id));
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
                  {isEnrolled ? 
                    <button className="btn btn-danger"
                    onClick={() => dispatch(deleteEnrollment(enrollment._id))}> Unenroll </button>
                    :
                    <button className="btn btn-success"
                    onClick={() => dispatch(addEnrollment({ user: currentUser._id, course: course._id }))}> Enroll </button>
                  }
                </Card.Body>
              </Card>
            </Col>
          )})}
        </Row>
      </div>
    </div>
  );
}
