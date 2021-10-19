import React from 'react'
import styles from './index.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navItemList}>
        <li className={styles.listItem}>Inicio</li>
        <li className={styles.listItem}>Productos</li>
        <li className={styles.listItem}>Nosotros</li>
      </ul>
    </nav>
  )
}

export default Nav
