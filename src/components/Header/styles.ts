import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GoBack = styled(Link)`
  text-decoration: none;
  font-weight: 600;

  > img {
    width: 135px;
  }
`;