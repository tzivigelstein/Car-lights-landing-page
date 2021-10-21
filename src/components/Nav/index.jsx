import styles from './index.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>doorj</h1>
      <ul className={styles.navItemList}>
        <li className={styles.listItem}>Inicio</li>
        <li className={styles.listItem}>Productos</li>
        <li className={styles.listItem}>Nosotros</li>
      </ul>
    </nav>
  )
}

export default Nav
