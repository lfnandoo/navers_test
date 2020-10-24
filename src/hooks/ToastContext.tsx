import React from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

interface ToastContextDataProps {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(): void;
}

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description: string;
}

const ToastContext = React.createContext<ToastContextDataProps>(
  {} as ToastContextDataProps,
);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = React.useState<ToastMessage[]>([]);

  const addToast = React.useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages((state) => [...state, toast]);
    },
    [],
  );

  const removeToast = React.useCallback(() => {}, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children} <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextDataProps {
  const context = React.useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
