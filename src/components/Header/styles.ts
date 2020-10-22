import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  > img {
    width: 135px;
  }
`;

export const Logout = styled.span`
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;