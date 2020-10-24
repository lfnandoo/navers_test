import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';

import InputBlock from '../../components/InputBlock';
import BlackButton from '../../components/BlackButton';

import logoImg from '../../assets/logo.svg';

import * as Styles from './styles';

interface SignInFormDataProps {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const history = useHistory();
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = React.useCallback(
    async (data: SignInFormDataProps) => {
      try {
        await signIn({ email: data.email, password: data.password });
        history.push('/home');
      } catch (e) {
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        });
      }
    },
    [signIn, history, addToast],
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
