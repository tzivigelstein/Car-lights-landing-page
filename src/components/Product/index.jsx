import styles from './index.module.css'
import { Link } from 'wouter'
import slugify from 'slugify'

const Product = ({ product }) => {
  const { id, title, price, discount, imageUrl, selected } = product

  const discountPrice = (price - price * (discount / 100)).toFixed(2)

  const slug = slugify(title, { lower: true })

  return (
    <Link href={`/product/${id}`}>
      <a>
        <div className={`${styles.productContainer} ${selected && styles.productContainerActive}`}>
          <div className={styles.productImageContainer}>
            <div className={styles.discountContainer}>
              <span className={styles.discount}>{discount}% OFF</span>
            </div>
            <img className={styles.productImage} src={`./assets/${imageUrl}`} alt={`Car showing ${title}`} />
            <div className={styles.productImageOverlay}></div>
            <div className={styles.productInfoContainer}>
              <span className={styles.productTitle}>{title}</span>
              <div className={styles.priceContainer}>
                <span className={styles.price}>${price}</span>
                <span className={styles.discountPrice}>${discountPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Product
