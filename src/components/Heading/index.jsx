import React from 'react'
import Button from '../Button'
import { RightArrow } from '../Icons'
import styles from './index.module.css'

const Heading = () => {
  return (
    <section className={styles.section}>
      <div className={styles.infoContainer}>
        <h1 className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, pariatur nostrum tenetur similique voluptatum
          asperiores aliquid minus temporibus aliquam laudantium.
        </h1>
        <Button text="Ver productos" icon={<RightArrow />} />
      </div>
      <img className={styles.backgroundImage} src="./assets/car_door_open_light_alert_3.jpg" alt="" />
    </section>
  )
}

export default Heading
