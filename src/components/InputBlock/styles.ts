import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-top: 27px;
  margin-bottom: 4px;

  font-weight: 600;
  font-size: 14px; 
`;

export const Input = styled.input`
  border: 1px solid var(--color-input-border);
  margin-bottom: 27px;
  padding: 10px;
`;