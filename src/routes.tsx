import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthProvider } from './hooks/AuthContext';

import SignIn from './pages/SignIn';

const Routes: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SignIn} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Routes;
