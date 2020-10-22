import React from 'react';

import logoImg from '../../assets/logo.svg';

import * as Styles from './styles';

const Header: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.GoBack to="/home">
        <img src={logoImg} alt="nave.rs" />
      </Styles.GoBack>
      <Styles.GoBack to="">Sair</Styles.GoBack>
    </Styles.Container>
  );
};

export default Header;
