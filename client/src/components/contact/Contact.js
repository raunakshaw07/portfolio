import React, { Component } from "react";
import RenderComp from "./RenderComp";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      one: "active",
      two: "",
      three: "",
    };
  }

  changeState = {
    clickOne: () => {
      this.setState({
        step: 1,
        one: "active",
        two: "",
        three: "",
      });
    },
    clickTwo: () => {
      this.setState({
        step: 2,
        one: "",
        two: "active",
        three: "",
      });
    },
    clickThree: () => {
      this.setState({
        step: 3,
        one: "",
        two: "",
        three: "active",
      });
    },
  };

  render() {
    return (
      <div className="container-custom works contact">
        <div className="watermark display-1">Contact</div>
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
                Personal
              </li>
              <li
                className={this.state.two}
                onClick={this.changeState.clickTwo}
              >
                Social
              </li>
              <li
                className={this.state.three}
                onClick={this.changeState.clickThree}
              >
                Message
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
            <RenderComp step={this.state.step} />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
