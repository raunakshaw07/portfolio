import React from "react";

class AdminHome extends React.Component {
  state = {
    CurrentUserName: "",
    CurrentUserEmail: "",
  };
  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    const name = idToken.idToken.claims.name;
    const email = idToken.idToken.claims.email;
    this.setState({ CurrentUserEmail: email, CurrentUserName: name });
  }
  render() {
    const { CurrentUserEmail, CurrentUserName } = this.state;
    return (
      <div className="itemCenter">
        <h1>Welcome {CurrentUserName}</h1>
        <p>{CurrentUserEmail}</p>
      </div>
    );
  }
}

export default AdminHome;
