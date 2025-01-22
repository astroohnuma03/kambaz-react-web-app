import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2544/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/pyth.jpg" width={200} />
            <div>
              <h5> CS2544 Python Essentials </h5>
              <p className="wd-dashboard-course-title"> 
                How to become a python master </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3750/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cplus.jpg" width={200} />
            <div>
              <h5> CS3750 C++ </h5>
              <p className="wd-dashboard-course-title">
                C++ Mastery Course </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1250/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/books.jpg" width={200} />
            <div>
              <h5> HIST1250 Into to History </h5>
              <p className="wd-dashboard-course-title">
                Welcome to History </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4560/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/jslogo.jpg" width={200} />
            <div>
              <h5> CS4560 Javascript </h5>
              <p className="wd-dashboard-course-title">
                Javascript is a programming language </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1800/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/drracket.jpg" width={200} />
            <div>
              <h5> CS1800 Intro to CS </h5>
              <p className="wd-dashboard-course-title">
                DrRacket is a great way to learn computer science! </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5600/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/network.jpg" width={200} />
            <div>
              <h5> CS5600 Network Programming </h5>
              <p className="wd-dashboard-course-title">
                Networks are a vital component of the internet </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
