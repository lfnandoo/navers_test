import React from 'react';
import { useTransition } from 'react-spring';

import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { ToastMessage, useToast } from '../../hooks/ToastContext';

import * as Styles from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Styles.Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Styles.Toast key={key} style={props} type={item.type}>
          <FiAlertCircle size={20} />

          <div>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </div>

          <button onClick={() => removeToast(item.id)}>
            <FiXCircle size={18} />
          </button>
        </Styles.Toast>
      ))}
    </Styles.Container>
  );
};

export default ToastContainer;
