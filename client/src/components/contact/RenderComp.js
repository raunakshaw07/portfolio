import React, { Component } from "react";

// Components
import Personal from "./Personal";
import Social from "./Social";
import Message from "./Message";

export class RenderComp extends Component {
  render() {
    const step = this.props.step;
    switch (step) {
      case 1:
        return <Personal />;
      case 2:
        return <Social />;
      case 3:
        return <Message />;
      default:
        console.log("No such component exist");
    }
  }
}

export default RenderComp;
