import styles from './index.module.css'

const LightSpot = ({ sizes = {}, colors = {}, position = {} }) => {
  const { width = '200px', height = '200px' } = sizes
  const { primary = 'violet', secondary = 'blue' } = colors
  const { top = '', right = '', left = '', bottom = 0 } = position

  const dynamicStyles = {
    width,
    height,
    background: `linear-gradient(45deg, ${primary}, ${secondary})`,
    top,
    right,
    left,
    bottom,
  }

  return <div style={dynamicStyles} className={styles.lightSpot}></div>
}

export default LightSpot
