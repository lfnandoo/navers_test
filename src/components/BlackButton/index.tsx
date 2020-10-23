import React, { ButtonHTMLAttributes } from 'react';

import * as Styles from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  width: string;
  color?: string;
  border?: string;
  backgroundColor?: string;
}

const BlackButton: React.FC<ButtonProps> = ({ text, width, ...rest }) => {
  return (
    <Styles.Button widthButton={width} {...rest}>
      {text}
    </Styles.Button>
  );
};

export default BlackButton;
