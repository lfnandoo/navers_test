import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthProvider } from './hooks/AuthContext';
import PrivateRoute from './hooks/PrivateRoute';

import SignIn from './pages/SignIn';
import Home from './pages/Home';

const Routes: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <PrivateRoute path="/home" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Routes;
