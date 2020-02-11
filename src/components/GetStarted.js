import React from 'react'
import styles from './GetStarted.module.css';

const GetStarted = props => {
  return (
    <div className={styles.getStartedContainer}>
      <div className={styles.middleContainer}>
        <div className={styles.middleSection}>
          <div className={styles.buttonDiv}>
            <button className={styles.getStartedButton}>Get Started</button>
          </div>
          <div className={styles.tutorialDiv}>
            <p className={styles.tutorial}>Take the Tutorial</p>
          </div>
        </div>
      </div>
    </div>

  )
};

export default GetStarted;