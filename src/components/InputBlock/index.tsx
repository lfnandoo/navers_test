import React from 'react';

import * as Styles from './styles';

interface InputBlockProps {
  label: string;
  placeholder: string;
  type: string;
}

const InputBlock: React.FC<InputBlockProps> = ({ label, ...rest }) => {
  return (
    <Styles.Container>
      <Styles.Label>{label}</Styles.Label>
      <Styles.Input {...rest} />
    </Styles.Container>
  );
};

export default InputBlock;
