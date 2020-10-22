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

  width: 448px; 
`;

export const Form = styled(Unform)`
  width: 100%;
`;
