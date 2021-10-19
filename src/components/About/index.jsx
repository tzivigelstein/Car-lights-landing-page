import React from 'react'
import styles from './index.module.css'

const About = () => {
  return (
    <section className={styles.section}>
      <div className={styles.staffImagesContainer}>
        <div className={styles.staffSquare}>
          <img className={styles.staffSquareImage} src="./assets/pep1.jpg" alt="" />
        </div>
        <div className={styles.staffSquare}>
          <img className={styles.staffSquareImage} src="./assets/pep2.jpg" alt="" />
        </div>
        <div className={styles.staffSquare}>
          <img className={styles.staffSquareImage} src="./assets/pep3.jpg" alt="" />
        </div>
        <div className={styles.staffSquare}></div>
      </div>
    </section>
  )
}

export default About
