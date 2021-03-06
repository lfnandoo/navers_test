import React from 'react';

import * as Styles from './styles';

interface FeedBackProps {
  isOpen: boolean;
}

const FeedBack: React.FC<FeedBackProps> = ({ isOpen, children }) => {
  if (isOpen) {
    return <Styles.FeedBack data-cy="modal">{children}</Styles.FeedBack>;
  }

  return <></>;
};

export default FeedBack;
