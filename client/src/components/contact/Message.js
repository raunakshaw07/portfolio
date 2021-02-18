import React, { Component } from "react";
import Flash from "./Flash";
import { connect } from "react-redux";
import { submitMsg } from "../../actions/messageAction";
import PropTypes from "prop-types";

export class Message extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    msg: "",
    flash: "",
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();
    const { name, email, subject, msg } = this.state;
    const message = {
      name,
      email,
      subject,
      msg,
    };
    this.setState({ flash: "Successfully sent..." });
    this.props.submitMsg(message, "Successfully sent...");
  }

  render() {
    const { name, email, subject, msg, flash } = this.state;
    return (
      <div className="msg-form">
        {<Flash flash={flash} />}
        <form
          onSubmit={this.onSubmit.bind(this)}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridGap: "4rem",
              gridTemplateColumns: "repeat(2,1fr)",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={name}
                onChange={this.handleChange("name")}
              />
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail address"
                value={email}
                onChange={this.handleChange("email")}
              />
            </div>
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                value={subject}
                onChange={this.handleChange("subject")}
              />
              <textarea
                name="msg"
                id="msg"
                placeholder="Message"
                value={msg}
                onChange={this.handleChange("msg")}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-block button mt-5">
            Send
          </button>
        </form>
      </div>
    );
  }
}

Message.propTypes = {
  submitMsg: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  message: state.message,
});

export default connect(mapStateToProps, { submitMsg })(Message);
