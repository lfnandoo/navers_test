import React from 'react';

import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { ToastMessage, useToast } from '../../hooks/ToastContext';

import * as Styles from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();

  return (
    <Styles.Container>
      {messages.map((message) => (
        <Styles.Toast key={message.id} type={message.type}>
          <FiAlertCircle size={20} />

          <div>
            <strong>{message.title}</strong>
            <p>{message.description}</p>
          </div>

          <button onClick={() => removeToast(message.id)}>
            <FiXCircle size={18} />
          </button>
        </Styles.Toast>
      ))}
    </Styles.Container>
  );
};

export default ToastContainer;
