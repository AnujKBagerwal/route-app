// @ts-nocheck
import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

const Main = () => {
  const PublicPage = () => {
    return <h3>Public</h3>;
  };

  const ProtectedPage = () => {
    return <h3>Protected</h3>;
  };

  const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    },
  };

  // Context provides a way to pass data through the component tree without having
  // to pass props down manually at every level.
  const authContext = createContext();

  const useProvideAuth = () => {
    const [user, setUser] = useState(null);

    const signin = (cb) => {
      return fakeAuth.signin(() => {
        setUser("user");
        cb();
      });
    };

    const signout = (cb) => {
      return fakeAuth.signout(() => {
        setUser(null);
        cb();
      });
    };

    return {
      user,
      signin,
      signout,
    };
  };

  const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
  };

  const useAuth = () => {
    return useContext(authContext);
  };

  const PrivateRoute = ({ children, ...rest }) => {
    let auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };

  const LoginPage = () => {
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
      auth.signin(() => {
        history.replace(from);
      });
    };

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={login}>Log in</button>
      </div>
    );
  };

  const AuthButton = () => {
    let history = useHistory();
    let auth = useAuth();

    return auth.user ? (
      <p>
        Welcome!
        <button
          onClick={() => {
            auth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    );
  };

  return (
    <div>
      <ProvideAuth>
        <Router>
          <div>
            <AuthButton />
            <ul>
              <li>
                <Link to="/public">Public Page</Link>
              </li>
              <li>
                <Link to="/protected">Protected Page</Link>
              </li>
            </ul>

            <Switch>
              <Route path="/public">
                <PublicPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <PrivateRoute path="/protected">
                <ProtectedPage />
              </PrivateRoute>
            </Switch>
          </div>
        </Router>
      </ProvideAuth>
    </div>
  );
};

export default Main;
