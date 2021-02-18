import React, { Component } from "react";
import RenderComp from "./RenderComp";

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      one: "active",
      two: "",
      three: "",
      four: "",
    };
  }

  changeState = {
    clickOne: () => {
      this.setState({
        step: 1,
        one: "active",
        two: "",
        three: "",
        four: "",
      });
    },
    clickTwo: () => {
      this.setState({
        step: 2,
        one: "",
        two: "active",
        three: "",
        four: "",
      });
    },
    clickThree: () => {
      this.setState({
        step: 3,
        one: "",
        two: "",
        three: "active",
        four: "",
      });
    },
    clickFour: () => {
      this.setState({
        step: 4,
        one: "",
        two: "",
        three: "",
        four: "active",
      });
    },
  };

  render() {
    return (
      <div className="container-custom works">
        <div className="watermark display-1">My Works</div>
        <div className="inner-work">
          <div
            className="menu"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
            data-aos-offset="0"
          >
            <ul>
              <li
                className={this.state.one}
                onClick={this.changeState.clickOne}
              >
                All
              </li>
              <li
                className={this.state.two}
                onClick={this.changeState.clickTwo}
              >
                Web Designs
              </li>
              <li
                className={this.state.three}
                onClick={this.changeState.clickThree}
              >
                UI Designs
              </li>
              <li
                className={this.state.four}
                onClick={this.changeState.clickFour}
              >
                Graphic Designs
              </li>
            </ul>
          </div>
          <div
            className="tabContent"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="600"
            data-aos-offset="0"
          >
            <div className="inner-content">
              <RenderComp step={this.state.step} skill={this.state.skills} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
