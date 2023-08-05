import React, { ReactNode } from 'react';
import ModalPortal from './ModalPortal';
import styles from './modal.module.scss';

type Props = {
  children: ReactNode;
  setOnModal: (state: boolean) => void;
};

const ModalFrame: React.FC<Props> = ({ children, setOnModal }: Props) => {
  return (
    <ModalPortal>
      <div className={styles.modalDim} onClick={() => setOnModal(false)}>
        <div className={styles.modalBox}>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};

export default ModalFrame;
