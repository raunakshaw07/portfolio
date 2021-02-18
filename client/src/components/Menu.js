import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Menu extends Component {
  render() {
    return (
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <Link to="/" className="link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/works" className="link">
                    Works
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
