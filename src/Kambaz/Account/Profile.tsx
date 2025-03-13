import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormSelect from "react-bootstrap/FormSelect";
import Button from "react-bootstrap/Button"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };
  useEffect(() => { fetchProfile(); }, []);
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
        <div>
          <Form.Control defaultValue={profile.username} id="wd-username" className="mb-2"
                        onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/>
          <Form.Control defaultValue={profile.password} id="wd-password" className="mb-2"
                        onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/>
          <Form.Control defaultValue={profile.firstName} id="wd-firstname" className="mb-2"
                        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/>
          <Form.Control defaultValue={profile.lastName} id="wd-lastname" className="mb-2"
                        onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}/>
          <Form.Control defaultValue={profile.dob} id="wd-dob" className="mb-2"
                        onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date"/>
          <Form.Control defaultValue={profile.email} id="wd-email" className="mb-2"
                        onChange={ (e) => setProfile({ ...profile, email: e.target.value })}/>
          <FormSelect onChange={(e) => setProfile({ ...profile, role:  e.target.value })}
          className="mb-2 w-25" id="wd-user-type">
            <option selected value="user">User</option>
            <option value="admin">Admin</option>
            <option value="faculty">Faculty</option>
            <option value="student">Student</option>
          </FormSelect>
          <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}