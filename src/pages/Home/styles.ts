import styled from 'styled-components';

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

