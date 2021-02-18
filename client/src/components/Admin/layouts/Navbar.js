import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    const { match, authenticated, login, logout } = this.props;
    if (authenticated === null) return null;

    const navLink = authenticated ? (
      <li className="nav-item mr-5">
        <button className="nav-link btn" onClick={logout}>
          Logout
        </button>
      </li>
    ) : (
      <li className="nav-item mr-5">
        <button className="nav-link btn" onClick={login}>
          Login
        </button>
      </li>
    );
    return (
      <div>
        <nav className="mb-1 navbar navbar-expand-lg nav-bg navbar-dark">
          <Link className="navbar-brand" to={`${match.path}`}>
            <h4>Administrator</h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-4"
            aria-controls="navbarSupportedContent-4"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mr-5"
            id="navbarSupportedContent-4"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown mr-5">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Routes
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/">
                    Home
                  </Link>
                  <Link className="dropdown-item" to="/about">
                    About
                  </Link>
                  <Link className="dropdown-item" to="/works">
                    Works
                  </Link>
                  <Link className="dropdown-item" to="/contact">
                    Contact
                  </Link>
                </div>
              </li>
              <li className="nav-item mr-5">
                <Link className="nav-link" to="/admin/inbox">
                  Inbox
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mr-5" to={`${match.path}/skills`}>
                  Skills
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              {navLink}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
