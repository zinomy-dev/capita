import { Link } from "react-router-dom";
import logo from '../img/capita-logo.png'
import {API_URL} from "../constant";

const Navbar = ({ user }) => {
  const logout = () => {
    window.open(`${API_URL}/auth/logout`, "_self");
  };
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Capita" className="logo" />
        </div>
        <div className="nav-container">
          {user ? (
            <><div className="name-holder">
              <p>Hi {user.displayName}</p>
            </div><div className="button-container">
                <div className="button-wrap">
                  <Link to='/dashboard' className="button-text">My Account</Link>
                </div>
              </div></>
          ) :''}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
