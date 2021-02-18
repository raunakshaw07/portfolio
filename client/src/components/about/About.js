import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div className="container-custom about">
        <div className="watermark display-1">About Me</div>
        <div className="inner-about">
          <div className="left-side">
            <div className="head">
              <div
                className="image"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="200"
                data-aos-offset="0"
              ></div>
              <div>
                <h1
                  className="name"
                  style={{ textShadow: "2px 2px 5px #000" }}
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="200"
                  data-aos-offset="0"
                >
                  Raunak{" "}
                  <span style={{ color: "#8ad5e4", marginLeft: "1rem" }}>
                    Shaw
                  </span>
                </h1>
              </div>
            </div>
            <div
              className="details"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="800"
              data-aos-offset="0"
            >
              <span style={{ fontSize: "2rem" }}>L</span>orem ipsum dolor sit
              amet consectetur adipisicing elit. Incidunt, alias qui inventore
              nam autem officiis iste minima reprehenderit velit facilis veniam
              exercitationem eligendi totam recusandae! Sequi aliquid nostrum
              aperiam magni?Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptate, placeat. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quos, dignissimos enim! Esse iusto unde
              aspernatur consectetur officiis nesciunt neque impedit.
            </div>
          </div>
          <div
            className="right-side"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="00"
            data-aos-delay="1400"
          >
            <div>
              <div className="card text-center card-style">
                <div className="card-header">
                  <h1 style={{ textShadow: "2px 2px 5px #000" }}>
                    UI/UX Designer
                  </h1>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Magni aliquam dolore incidunt soluta modi ex natus sed
                    voluptatem, accusantium laboriosam.
                  </p>
                </div>
              </div>
            </div>
            <div className="gridColumn">
              <div className="card text-center card-style">
                <div className="card-header">
                  <h1 style={{ textShadow: "2px 2px 5px #000" }}>
                    Web Developer
                  </h1>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Magni aliquam dolore incidunt soluta modi ex natus sed
                    voluptatem, accusantium laboriosam.
                  </p>
                </div>
              </div>
              <div className="card text-center card-style">
                <div className="card-header">
                  <h1 style={{ textShadow: "2px 2px 5px #000" }}>
                    Graphic Designer
                  </h1>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Magni aliquam dolore incidunt soluta modi ex natus sed
                    voluptatem, accusantium laboriosam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
