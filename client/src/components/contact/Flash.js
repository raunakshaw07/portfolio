import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Flash extends Component {
  render() {
    if (this.props.flash === "" || this.props.flash === null) {
      return <div />;
    }
    return (
      <div
        className="alert alert-info alert-dismissible fade show"
        role="alert"
      >
        {this.props.flash}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

Flash.propTypes = {
  flash: PropTypes.string,
};

const mapStateToProps = (state) => ({
  flash: state.message.flash,
});

export default connect(mapStateToProps, {})(Flash);
