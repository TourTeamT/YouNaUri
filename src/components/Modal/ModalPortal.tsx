import React from 'react';
import ReactDOM from 'react-dom';

type ModalPortalProps = {
  children: React.ReactNode;
};

const ModalPortal: React.FC<ModalPortalProps> = ({ children }) => {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return ReactDOM.createPortal(children, modalRoot);
};

export default ModalPortal;
