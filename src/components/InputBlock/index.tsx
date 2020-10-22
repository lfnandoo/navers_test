import React, { InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import * as Styles from './styles';

interface InputBlockProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const InputBlock: React.FC<InputBlockProps> = ({ label, name, ...rest }) => {
  const inputRef = React.useRef(null);
  const { fieldName, registerField } = useField(name);

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Styles.Container>
      <Styles.Label htmlFor={label}>{label}</Styles.Label>
      <Styles.Input id={label} {...rest} ref={inputRef} />
    </Styles.Container>
  );
};

export default InputBlock;
