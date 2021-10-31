import { forwardRef } from 'react'
import Button from '../Button'
import { RightArrow } from '../Icons'
import styles from './index.module.css'

const Heading = forwardRef((props, ref) => {
  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.infoContainer}>
        <h1 className={styles.text}>Descubre el nuevo diseño que le dará mas seguridad a tu vida.</h1>
        <p className={styles.helperText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nisi accusantium quos ut saepe molestiae quidem
          ullam corporis numquam veritatis.
        </p>
        <Button text="Ver productos" icon={<RightArrow />} />
      </div>
      <img className={styles.backgroundImage} src="./assets/home_heading_background.jpg" alt="" />
    </section>
  )
})

export default Heading
