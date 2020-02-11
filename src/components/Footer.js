import React from 'react';
import styles from './Footer.module.scss';

const Footer = props => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.oneThird}>
            <img src={require('../images/fblogo.png')} alt="fblogo" className={styles.logo}/>
            <p>Copyright © 2020 Facebook Inc.</p>
        </div>
        <div className={styles.twoThirds}>
          <div className={styles.docs}>
            <p className={styles.heading}>Docs</p>
            <p>Installation</p>
            <p>Main Concepts</p>
            <p>Advanced Guides</p>
            <p>API Reference</p>
            <p>Hooks</p>
            <p>ConcurrentMode (Experimental)</p>
            <p>Contributing</p>
            <p>FAQ</p>
          </div>
          <div className={styles.channels}>
            <p className={styles.heading}>Channels</p>
            <p>Github</p>
            <p>Stack Overflow</p>
            <p>Discussion Forums</p>
            <p>Reactiflux Chat</p>
            <p>DEV Community</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>
          <div className={styles.community}>
            <p className={styles.heading}>Community</p>
            <p>Code of Conduct</p>
            <p>Community Resources</p>
          </div>
          <div className={styles.more}>
            <p className={styles.heading}>More</p>
            <p>Tutorial</p>
            <p>Blog</p>
            <p>Acknowledgements</p>
            <p>React Native</p>
          </div>

        </div>
      </div>
    </div>
  )
};

export default Footer;