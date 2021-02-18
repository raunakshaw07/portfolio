import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Social extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>Follow Me On</h1>
        <div className="social-icons">
          <Link to="#" className="link">
            <i className="fab fa-facebook"></i>
            <p>Facebook</p>
          </Link>
          <Link to="#" className="link">
            <i className="fab fa-github"></i>
            <p>Github</p>
          </Link>
          <Link to="#" className="link">
            <i className="fab fa-instagram"></i>
            <p>Instagram</p>
          </Link>
          <Link to="#" className="link">
            <i className="fab fa-twitter"></i>
            <p>Twitter</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Social;
