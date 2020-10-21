import React from 'react';

import * as Styles from './styles';

interface InputBlockProps {
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const InputBlock: React.FC<InputBlockProps> = ({
  label,
  setState,
  ...rest
}) => {
  const handleInputValue = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setState(e.target.value);
    },
    [setState],
  );

  return (
    <Styles.Container>
      <Styles.Label htmlFor={label}>{label}</Styles.Label>
      <Styles.Input onChange={handleInputValue} id={label} {...rest} />
    </Styles.Container>
  );
};

export default InputBlock;
