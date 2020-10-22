import React from 'react';

import { useAuth } from '../../hooks/AuthContext';

import InputBlock from '../../components/InputBlock';
import BlackButton from '../../components/BlackButton';

import logoImg from '../../assets/logo.svg';

import * as Styles from './styles';

interface SignInFormDataProps {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const handleSubmit = React.useCallback(
    async (data: SignInFormDataProps) => {
      try {
        await signIn({ email: data.email, password: data.password });
      } catch (e) {
        console.log(e);
      }
    },
    [signIn],
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
            name="email"
            required
          />
          <InputBlock
            placeholder="Senha"
            type="password"
            label="Senha"
            name="password"
            required
          />
          <BlackButton type="submit" text="Entrar" width="100%" />
        </Styles.Form>
      </Styles.Main>
    </Styles.Container>
  );
};

export default SignIn;
