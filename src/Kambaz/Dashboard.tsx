import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/2544/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/pyth.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS2544 Python Essentials</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">How to become a python master</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/3750/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/cplus.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS3750 C++</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">C++ Mastery Course</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1250/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/books.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">HIST1250 Into to History</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Welcome to History</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/4560/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/jslogo.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS4560 Javascript</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Javascript is a programming language</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1800/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/drracket.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS1800 Intro to CS</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">DrRacket is a great way to learn computer science!</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/5600/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/network.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS5600 Network Programming</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Networks are a vital component of the internet</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
);}
