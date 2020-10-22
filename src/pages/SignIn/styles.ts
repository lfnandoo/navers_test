import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export const Main = styled.main`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  border: 1px solid var(--color-input-border);
  padding: 40px 32px;

  width: 30%;
  height: 50%;
`;

export const Form = styled(Unform)`
  width: 100%;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  background-color: var(--color-primary);
  color: var(--color-text-in-button);
  border: 0;

  padding: 14px;
  margin-top: 5px;

  width: 100%;


`;
