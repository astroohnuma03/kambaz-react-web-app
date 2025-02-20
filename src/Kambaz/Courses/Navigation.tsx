import { courses } from "../Database";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { useParams, useLocation } from "react-router";
export default function CourseNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <ListGroup id="wd-courses-navigation" className="wd fs-5 rounded-0">
      {links.map((link) => (
        <ListGroup.Item as={Link} to={`/Kambaz/Courses/${course && course._id}/${link}`} className={`border border-0
                        ${pathname.includes(link) ? "active" : "text-danger"}`}>
          {link}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
