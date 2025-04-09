import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  if (links[0] == "Profile") {
    return (
      <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
        <Link to="/Kambaz/Account/Profile" id="wd-account-profile-link"
          className="list-group-item text-danger border border-0"> Profile </Link>
        {currentUser && currentUser.role === "ADMIN" && (
          <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
      </div>
    )
  }
  else {
    return (
      <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
        <Link to="/Kambaz/Account/Signin" id="wd-account-signin-link"
          className="list-group-item active border border-0"> Signin </Link>
        <Link to="/Kambaz/Account/Signup" id="wd-account-signup-link"
          className="list-group-item text-danger border border-0"> Signup </Link>
      </div>
    )
  }
}
