import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './container/About';
import User from './container/User';
import Contact from './container/Contact';

const routerConfig = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={() => <>Hello World</>} />
        <Route path="/about" component={About} />
        <Route path="/user" component={User} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default routerConfig;
