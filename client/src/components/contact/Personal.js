import React, { Component } from "react";
// import ReactTable from "react-table";

export class Personal extends Component {
  render() {
    return (
      <div className="personal-details">
        <ul>
          <li className="border-bottom">
            <p>Phone Number</p>
            <p>9876543210</p>
          </li>
          <li className="border-bottom">
            <p>E-mail</p>
            <p>TU1@company.com</p>
          </li>
          <li>
            <p>Address</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              doloribus.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Personal;
