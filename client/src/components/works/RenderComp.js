import React, { Component } from "react";

// Components
import All from "./All";
import UI from "./UI";
import Webd from "./Webd";
import Graphic from "./Graphic";

export class RenderComp extends Component {
  render() {
    const step = this.props.step;
    switch (step) {
      case 1:
        return <All />;
      case 2:
        return <Webd />;
      case 3:
        return <UI />;
      case 4:
        return <Graphic />;
      default:
        console.log("No such component exist");
    }
  }
}

export default RenderComp;
