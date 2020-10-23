import React from 'react';
import {
  Redirect,
  Route,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';

import { useAuth } from './AuthContext';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType<ReactDOMRouteProps>;
}

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { userData } = useAuth();

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!userData.token ? <Component {...routeProps} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
