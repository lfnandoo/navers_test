import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 25px 0;
`;

export const Main = styled.main`
`;

export const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 60px;
  margin-bottom: 30px;

  > h1 {
    font-size: 40px;
    font-weight: 600;
  }
`;

export const NaversList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const NaverCard = styled.div`
  margin: 10px;

  cursor: pointer;

  > h1, h2 {
    margin: 10px 0;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;

  > img { 
    margin-right: 10px;
  }
`;

export const NewNaverButton = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  background-color: var(--color-primary);
  color: var(--color-text-in-button);
  border: 0;

  padding: 14px;
  margin-top: 5px;

  width: 176px;
`;