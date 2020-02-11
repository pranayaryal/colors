import React from 'react'
import styles from './Navigation.module.css';

const Navigation = props => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <p>Pranay</p>
      </div>
      <div>
        <ul className={styles.firstNav}>
          <li>Docs</li>
          <li>Tutorial</li>
          <li>Blog</li>
          <li>Community</li>
        </ul>
      </div>
      <div className={styles.searchBox}>
        <input placeholder="search" />
      </div>
      <div className={styles.rightSide}>
        <p>v16.12.0</p>
        <p>Languages</p>
        <p>Github</p>
      </div>
    </div>

  )
};

export default Navigation;