import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="container text-center my-5">
      <h1>Successfully updated</h1>
      <Link to="/admin" className="btn btn-lg button my-5">
        Home
      </Link>
    </div>
  );
};

export default Success;
