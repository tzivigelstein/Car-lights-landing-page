import styles from './index.module.css'
import useProducts from '../../hooks/useProducts'
import { useLocation } from 'wouter'
import slugify from 'slugify'

const Product = ({ product }) => {
  const { id, title, price, discount, imageUrl, selected, stock } = product

  const { setActiveProduct } = useProducts()
  const [location, setLocation] = useLocation()

  const discountPrice = (price - price * ((discount + 10) / 100)).toFixed(2)

  const slug = slugify(title, { lower: true })

  const handleClick = () => {
    setActiveProduct(id)
    setLocation(`/product/${slug}`)
  }

  return (
    <button className={styles.productButton} onClick={handleClick}>
      <div className={`${styles.productContainer} ${selected && styles.productContainerActive}`}>
        <div className={styles.productImageContainer}>
          <div className={styles.discountContainer}>
            <span className={styles.discount}>{discount}% OFF</span>
          </div>
          {stock && (
            <div className={styles.stockContainer}>
              <span className={styles.stock}>Disponible</span>
            </div>
          )}
          <img className={styles.productImage} src={`./assets/${imageUrl}`} alt={`Car showing ${title}`} />
          <div className={styles.productImageOverlay}></div>
          <div className={styles.productInfoContainer}>
            <span className={styles.productTitle}>{title}</span>
            <div className={styles.priceContainer}>
              <span className={styles.price}>${price.toLocaleString([], { maximunSignificantDigits: 2 })}</span>
              <span className={styles.discountPrice}>
                ${discountPrice.toLocaleString([], { maximunSignificantDigits: 2 })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}

export default Product
