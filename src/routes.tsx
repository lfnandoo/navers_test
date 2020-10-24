import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthProvider } from './hooks/AuthContext';
import { ToastProvider } from './hooks/ToastContext';
import PrivateRoute from './hooks/PrivateRoute';

import SignIn from './pages/SignIn';
import Home from './pages/Home';
import CreateNaver from './pages/CreateNaver';
import EditNaver from './pages/EditNaver';

const Routes: React.FC = () => {
  return (
    <AuthProvider>
      <ToastProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={SignIn} />
            <PrivateRoute path="/home" exact component={Home} />
            <PrivateRoute path="/create" exact component={CreateNaver} />
            <PrivateRoute
              path="/edit/:cardEditId"
              exact
              component={EditNaver}
            />
          </Switch>
        </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
  );
};

export default Routes;
