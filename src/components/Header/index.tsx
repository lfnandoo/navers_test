import React from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../hooks/AuthContext';

import logoImg from '../../assets/logo.svg';

import * as Styles from './styles';

const Header: React.FC = () => {
  const history = useHistory();
  const { signOut } = React.useContext(AuthContext);

  const handleLogout = React.useCallback(() => {
    signOut();
    history.push('/');
  }, [signOut, history]);

  return (
    <Styles.Container>
      <Styles.Logo to="/home">
        <img src={logoImg} alt="nave.rs" />
      </Styles.Logo>
      <Styles.Logout onClick={handleLogout}>Sair</Styles.Logout>
    </Styles.Container>
  );
};

export default Header;
