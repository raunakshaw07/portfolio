import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import { withOktaAuth } from "@okta/okta-react";
import AdminHome from "./AdminHome";
import AdminSkills from "./skillsComponent/AdminSkills";
import AdminInbox from "./msgComponent/AdminInbox";
import Success from "./Success";

export default withOktaAuth(
  class Admin extends Component {
    state = {
      authenticated: null,
    };
    checkAuthentication = async () => {
      const authenticated = await this.props.authState.isAuthenticated;
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };
    componentDidMount() {
      this.checkAuthentication();
    }
    componentDidUpdate() {
      this.checkAuthentication();
    }
    login = async () => {
      this.props.authService.login("/");
    };

    logout = async () => {
      this.props.authService.logout("/");
    };
    render() {
      const { match } = this.props;
      return (
        <div className="custom">
          <Navbar
            match={match}
            authenticated={this.state.authenticated}
            login={this.login}
            logout={this.logout}
          />
          <div>
            <Switch>
              <Route
                exact
                path={`${match.path}`}
                render={(props) => <AdminHome />}
              />
              <Route
                exact
                path={`${match.path}/skills`}
                render={(props) => <AdminSkills />}
              />
              <Route
                exact
                path={`${match.path}/inbox`}
                render={(props) => <AdminInbox />}
              />
              <Route
                exact
                path={`${match.path}/success`}
                render={(props) => <Success />}
              />
            </Switch>
          </div>
        </div>
      );
    }
  }
);
