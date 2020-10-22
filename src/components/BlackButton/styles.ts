import styled from 'styled-components';

interface ButtonProps {
  widthButton: string;
}

export const Button = styled.button<ButtonProps>`
  font-size: 14px;
  font-weight: 600;
  background-color: var(--color-primary);
  color: var(--color-text-in-button);
  border: 0;

  padding: 14px;
  margin-top: 5px;

  width: ${({widthButton}) => widthButton};
`;
