import React from 'react';

import api from '../services/api';

interface SignInCredentialsProps {
  email: string;
  password: string;
}

interface AuthContextProps {
  signIn(credentials: SignInCredentialsProps): Promise<void>;
  signOut(): void;
  userData: ResponseDataProps;
}

interface ResponseDataProps {
  token: string;
  id: string;
}

export const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = React.useState<ResponseDataProps>(() => {
    const token = localStorage.getItem('@Navers:token');
    const id = localStorage.getItem('@Navers:id');

    if (token && id) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, id };
    }

    return {} as ResponseDataProps;
  });

  const signIn = React.useCallback(async ({ email, password }) => {
    const { data } = await api.post<ResponseDataProps>('/users/login', {
      email,
      password,
    });
    const { token, id } = data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    localStorage.setItem('@Navers:token', token);
    localStorage.setItem('@Navers:id', id);
    setUserData({ token, id });
  }, []);

  const signOut = React.useCallback(() => {
    localStorage.clear();

    setUserData({} as ResponseDataProps);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextProps {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
