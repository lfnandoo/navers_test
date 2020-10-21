import React from 'react';

import InputBlock from '../../components/InputBlock';

import logoImg from '../../assets/logo.svg';

import * as Styles from './styles';

const SignIn: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.Main>
        <img src={logoImg} alt="Nave.rs" />
        <Styles.Form>
          <InputBlock placeholder="E-mail" type="email" label="E-mail" />
          <InputBlock placeholder="Senha" type="password" label="Senha" />
          <Styles.Button>Entrar</Styles.Button>
        </Styles.Form>
      </Styles.Main>
    </Styles.Container>
  );
};

export default SignIn;
