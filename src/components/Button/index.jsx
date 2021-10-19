import styles from './index.module.css'

const Button = ({ text, icon: Icon }) => {
  return (
    <button className={styles.button}>
      {text}
      {Icon}
    </button>
  )
}

export default Button
