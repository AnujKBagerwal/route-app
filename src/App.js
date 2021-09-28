import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import history from "./history";
import About from "./container/About";
import User from "./container/User";
import Contact from "./container/Contact";
import Header from "./container/Header";
import Dynamic from "./container/Dynamic";
import Topics from "./container/Nesting/Topics";
import NoMatch from "./container/NoMatch";
import Account from "./container/Account";

const App = () => {
  return (
    <>
      <Router history={history}>
        <Header />
        <Switch>
          {/* Basic Routes  */}
          <Route path="/" component={() => <>Hello World</>} exact />
          <Route path="/about" component={About} exact />
          <Route path="/user" component={User} exact />
          <Route path="/contact" component={Contact} exact />
          {/* Nesting  */}
          <Route path="/topics" component={Topics} exact />
          {/* Query Route  */}
          <Route path="/account" search="?search=:id" component={Account} />
          {/* Url / Dynamic Route  */}
          {/* <Route
            path="/:id"
            // children={<Dynamic />}
            component={Dynamic}
          /> */}
          {/* NO Path  */}
          {/* <Route path="*">
            <NoMatch />
          </Route> */}
          <Redirect to="/0" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
