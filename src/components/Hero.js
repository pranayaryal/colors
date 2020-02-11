import React from 'react'
import styles from './Hero.module.css'

const Hero = props => {
  return (
    <div className={styles.hero}>
      <p className={styles.title}>Pranay Aryal</p>
      <p className={styles.subtitle}>Software Developer</p>
    </div>
  )
};

export default Hero;