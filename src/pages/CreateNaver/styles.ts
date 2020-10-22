import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 25px 0;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 60px;
`;

export const Form = styled(Unform)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;

  width: 60%;

  > button {
    justify-self: end;
  }

  label, input {
    margin: 0;
    margin-bottom: 4px;
  }
`;

export const TopContent = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 15px;

  > h1 {
    font-weight: 600;
    font-size: 24px;
  }
`;

export const Back = styled(Link)`
  margin-right: 10px;
  display: flex;
`;

export const Invisible = styled.div`
  visibility: none;
`;