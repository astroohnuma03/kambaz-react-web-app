import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <Form.Control id="wd-username"
             placeholder="username"
             className="mb-2 w-25"/>
      <Form.Control id="wd-password"
             placeholder="password" type="password"
             className="mb-2 w-25"/>
      <Link id="wd-signin-btn"
            to="/Kambaz/Account/Profile"
            className="btn btn-primary w-25 mb-2">
            Sign in </Link><br />
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">Sign up</Link>
    </div>
  );
}