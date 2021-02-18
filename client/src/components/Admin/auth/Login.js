import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SignInWidget from "./SignInWidget";
import { withOktaAuth } from "@okta/okta-react";

export default withOktaAuth(
  class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        authenticated: null,
      };
      this.checkAuthentication();
    }

    async checkAuthentication() {
      const authenticated = await this.props.authState.isAuthenticated;
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    }

    componentDidUpdate() {
      this.checkAuthentication();
    }

    onSuccess = (res) => {
      return this.props.authService.redirect({
        sessionToken: res.session.token,
      });
    };

    onError = (err) => {
      console.log("error logging in", err);
    };

    render() {
      if (this.state.authenticated === null) return null;
      return this.state.authenticated ? (
        <div className="pt-5 custom">
          <Redirect to={{ pathname: "/admin" }} />
        </div>
      ) : (
        <div className="pt-5 custom">
          <SignInWidget
            baseUrl={this.props.baseUrl}
            onSuccess={this.onSuccess}
            onError={this.onError}
          />
        </div>
      );
    }
  }
);

// export default Login;
