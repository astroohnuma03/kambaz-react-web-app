import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormSelect from "react-bootstrap/FormSelect";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form.Control id="wd-username"
             value="alice"
             className="mb-2 w-25"/>
      <Form.Control id="wd-password"
             value="123" type="password"
             className="mb-2 w-25"/>
      <Form.Control id="wd-first-name"
             value="Alice"
             className="mb-2 w-25"/>
      <Form.Control id="wd-last-name"
             value="Wonderland"
             className="mb-2 w-25"/>
      <Form.Control id="wd-date-joined"
             type="date"
             className="mb-2 w-25"/>
      <Form.Control id="wd-user-email"
             type="email" value="alice@wonderland.com"
             className="mb-2 w-25"/>
      <FormSelect className="mb-2 w-25" id="wd-user-type">
        <option selected value="user">User</option>
        <option value="admin">Admin</option>
        <option value="faculty">Faculty</option>
        <option value="student">Student</option>
      </FormSelect>
      <Link id="wd-signout-btn"
            to="/Kambaz/Account/Signin"
            className="btn btn-danger w-25 mb-2">
            Signout </Link><br />
    </div>
  );
}