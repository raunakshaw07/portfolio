import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "./sass/main.scss";
import { Provider } from "react-redux";
import store from "./store";
import { createBrowserHistory as createHistory } from "history";

// Components
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/about/About";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Admin from "./components/Admin/Admin";
import Login from "./components/Admin/auth/Login";

class App extends Component {
  componentDidMount() {
    AOS.init();
  }
  onAuthRequired() {
    const history = createHistory();
    history.push("/login");
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Security
            issuer="https://dev-619927.okta.com/oauth2/default"
            clientId="0oaltfnuzZRFMSVrb4x6"
            redirectUri={window.location.origin + "/implicit/callback"}
            onAuthRequired={this.onAuthRequired}
            pkce={true}
          >
            <div className="App"></div>
            <Route
              exact
              path="/"
              render={(props) => (
                <div>
                  <Menu />
                  <Home />
                </div>
              )}
            />
            <Route
              path="/about"
              render={(props) => (
                <React.Fragment>
                  <Menu />
                  <About />
                </React.Fragment>
              )}
            />
            <Route
              path="/works"
              render={(props) => (
                <React.Fragment>
                  <Menu />
                  <Works />
                </React.Fragment>
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <React.Fragment>
                  <Menu />
                  <Contact />
                </React.Fragment>
              )}
            />
            <SecureRoute path="/admin" component={Admin} />
            <Route
              path="/login"
              render={() => <Login baseUrl="https://dev-619927.okta.com" />}
            />
            <Route path="/implicit/callback" component={LoginCallback} />
          </Security>
        </Router>
      </Provider>
    );
  }
}

export default App;
