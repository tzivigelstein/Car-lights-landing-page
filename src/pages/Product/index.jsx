import styles from './index.module.css'
import Nav from '../../components/Nav'
import useProducts from '../../hooks/useProducts'
import LigthSpot from '../../components/LightSpot'

const Product = () => {
  const { activeProduct } = useProducts()
  const { discount, stock, price, title, imageUrl } = activeProduct

  const finalPrice = (price - price * 0.1 - (price * discount) / 100).toLocaleString([], {
    maximunSignificantDigits: 2,
  })

  return (
    <div className={styles.container}>
      <Nav />
      <img className={styles.productImageBackground} src={`../../../assets/${imageUrl}`} alt={title} />
      <div className={styles.gallery}>
        <img className={styles.productImage} src={`../../../assets/${imageUrl}`} alt={title} />
      </div>
      <aside className={styles.asideBar}>
        <LigthSpot position={{ right: 0, bottom: 0 }} />
        <div className={styles.titleAndPrice}>
          <h1 className={styles.productTitle}>{title}</h1>
          <span className={styles.productPrice}>
            $
            {price.toLocaleString([], {
              maximunSignificantDigits: 2,
            })}
          </span>
        </div>
        <p className={styles.productDescription}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ullam impedit officiis illo vel vitae cum
          eligendi, earum possimus rerum.
        </p>
        <div>
          <div>
            <h4 className={styles.discountTitle}>Descuentos</h4>
            <div className={styles.discountContainer}>
              <span className={styles.discountCodeText}>
                Código de descuento <span className={styles.discountCode}>VERANO2021</span> aplicado 10%
              </span>
              <span className={styles.discountCodeText}>
                Código de descuento <span className={styles.discountCode}>LANZAMIENTO</span> aplicado {discount}%
              </span>
              <p className={styles.finalPrice}>
                Precio final despues de descuentos $
                {finalPrice.toLocaleString([], {
                  maximunSignificantDigits: 2,
                })}
              </p>
            </div>
          </div>
        </div>
        <button className={styles.button}>
          Comprar - $
          {finalPrice.toLocaleString([], {
            maximunSignificantDigits: 2,
          })}
        </button>
        <p className={styles.warningText}>Precio sujeto a impuestos y regulaciones regionales*</p>
      </aside>
    </div>
  )
}

export default Product
