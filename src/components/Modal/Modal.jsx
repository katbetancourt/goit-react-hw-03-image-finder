import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <img src={imageUrl} alt="Modal" />
      </div>
    </div>
  );
};

export default React.memo(Modal);
