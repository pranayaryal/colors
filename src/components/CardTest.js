import React from 'react'
import styles from './Card.module.css';

const Card = props => {
  console.log(props.heading);
  return (
    <div className={styles.card}>
      <div className={styles.cardHeading}>{props.heading}</div>
      <div className={styles.cardBody}>
        {props.children}
      </div>
    </div>
  )
};

export default Card;