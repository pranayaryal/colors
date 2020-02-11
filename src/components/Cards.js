import React from 'react'
import Card from './Card';
import CardTest from './CardTest';
import styles from './Cards.module.css';

const Cards = props => {
    return (
      <section className={styles.section}>
        <CardTest heading="Declarative">
            <p className="first-para">React makes it painless to create interactive UIs. 
              Design simple views for each state in your application,
              and React will efficiently update and render
               just the right components when your data changes.</p>
               <p className={styles.secondPara}>Declarative views make your code more predictable and easier to debug.</p>
        </CardTest>
        <CardTest heading="Component-Based">
            <p className="first-para">Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
            <p className={styles.secondPara}>Since component logic is written in JavaScript instead of templates,
               you can easily pass rich data through your app and keep state out of the DOM.</p>
        </CardTest>
        <CardTest heading="Learn Once, Write Anywhere">
            <p className="first-para">We don’t make assumptions about the rest of your technology stack, 
              so you can develop new features in React without rewriting existing code.</p>
            <p className={styles.secondPara}>React can also render on the server using Node and power mobile apps using React Native.</p>
        </CardTest>
      </section>
  )
};

export default Cards;