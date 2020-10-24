import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    > button, svg {
      stroke: #3172b7;
      cursor: pointer;
    }
    > div {
      > strong {
        font-weight: 600;
        color: #3172b7;
      }
      > p {
        color: #3172b7;
      }
    }
  `,
  success: css`
    background: #e6fffa;
    > button svg, svg {
      stroke: #2e656a;
      cursor: pointer;
    }
    > div {
      > strong {
        font-weight: 600;
        color: #2e656a;
      }
      > p {
        color: #2e656a;
      }
    }
  `,
  error: css`
    background: #fddede;
    > button svg, svg {
      stroke: #c53030;
      cursor: pointer;
    }
    > div {
      > strong {
        font-weight: 600;
        color: #c53030;
      }
      > p {
        color: #c53030;
      }
    }
  `
}

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`;

export const Toast = styled.div<ToastProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, .2);

  display: flex;

  & + li {
    margin-top: 8px;
  }
  
  ${({type}) => toastTypeVariations[type || 'info']}

  svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: .8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 15px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;