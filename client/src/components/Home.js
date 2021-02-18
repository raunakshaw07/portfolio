import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div className="container-custom home">
        <div className="inner">
          <h1
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            style={{ textShadow: "2px 2px 5px #000" }}
          >
            I'm
          </h1>
          <h1
            className="display-1"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="1000"
            style={{ textShadow: "2px 2px 5px #000" }}
          >
            Raunak <span style={{ color: "#8ad5e4" }}>Shaw</span>
          </h1>
          <p
            className="mb-4 h4"
            data-aos="fade-right"
            data-aos-delay="2000"
            data-aos-duration="1000"
            style={{ textShadow: "2px 2px 5px #000" }}
          >
            Web developer, UI/UX designer
          </p>
          <div
            data-aos="fade-right"
            data-aos-delay="3000"
            data-aos-duration="1000"
          >
            <Link to="#" className="button">
              Download CV
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
