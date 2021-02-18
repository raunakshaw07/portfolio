import React from "react";

const Status = ({ status }) => {
  if (status === null) {
    return <div />;
  } else {
    return (
      <div
        className="alert alert-info alert-dismissible fade show"
        role="alert"
      >
        {status}
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
};

export default Status;
