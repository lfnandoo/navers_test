import React from 'react';

import api from '../services/api';

interface SignInCredentialsProps {
  email: string;
  password: string;
}

interface AuthContextProps {
  signIn(credentials: SignInCredentialsProps): Promise<void>;
  userToken: string;
}

interface ResponseDataProps {
  token: string;
}

export const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [userToken, setUserToken] = React.useState(() => {
    const token = localStorage.getItem('@Navers:token');

    if (token) {
      return token;
    }

    return '';
  });

  const signIn = React.useCallback(async ({ email, password }) => {
    const { data } = await api.post<ResponseDataProps>('/users/login', {
      email,
      password,
    });
    const { token } = data;

    localStorage.setItem('@Navers:token', token);
    setUserToken(token);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};