import React from "react";
import logo from '../water.png';
import { Link, withRouter } from "react-router-dom";


function Navigation(props) {
  return (
    <div className="header">
      <nav className="header">
        <div className="header">
          <Link className="navbar-brand" to="/">
            <img src={logo} className="watermark"></img>
          </Link>

          <div>
            <ul className="navbar">
              
              <li
                className={`nav-item  ${
                  props.location.pathname === "/TankInfo" ? "active" : ""
                }`}
              >
                <Link className="nav-link btn" to="/TankInfo">
                  Water level
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/RegForm" ? "active" : ""
                }`}
              >
                <Link className="nav-link btn" to="/RegForm">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
