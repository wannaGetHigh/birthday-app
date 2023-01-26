import React from 'react';

import styles from './styles.module.css'

const Button = ({ children, onClick }) => {
  return (
    <button className={styles.pushable} onClick={onClick}>
        <span className={styles.front}>
            {children}
        </span>
    </button>
  )
}

export default Button