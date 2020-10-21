import React from 'react';

import InputBlock from '../../components/InputBlock';

import logoImg from '../../assets/logo.svg';

import * as Styles from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    },
    [],
  );

  return (
    <Styles.Container>
      <Styles.Main>
        <img src={logoImg} alt="Nave.rs" />
        <Styles.Form onSubmit={handleSubmit}>
          <InputBlock
            placeholder="E-mail"
            type="email"
            label="E-mail"
            required
            setState={setPassword}
          />
          <InputBlock
            placeholder="Senha"
            type="password"
            label="Senha"
            required
            setState={setEmail}
          />
          <Styles.Button type="submit">Entrar</Styles.Button>
        </Styles.Form>
      </Styles.Main>
    </Styles.Container>
  );
};

export default SignIn;
