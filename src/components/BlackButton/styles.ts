import styled from 'styled-components';

interface ButtonProps {
  widthButton: string;
  color?: string;
  border?: string;
  backgroundColor?: string;
}

export const Button = styled.button<ButtonProps>`
  font-size: 14px;
  font-weight: 600;
  background-color: var(--color-primary);
  background-color: ${({backgroundColor}) => !!backgroundColor ? backgroundColor : "var(--color-primary)"};
  color: ${({color}) => !!color ? color : "var(--color-text-in-button)"};
  border: ${({border}) => !!border ? border : 0};

  cursor: pointer;

  padding: 14px;
  margin-top: 5px;

  width: ${({widthButton}) => widthButton};
`;
