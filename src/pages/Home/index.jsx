import styles from './index.module.css'
import Nav from '../../components/Nav'
import Heading from '../../components/Heading'
import Products from '../../components/Products'
import About from '../../components/About'
import LightSpot from '../../components/LightSpot'
import { useRef } from 'react'

const Home = () => {
  const headingRef = useRef()
  const productsRef = useRef()
  const aboutRef = useRef()

  return (
    <div className={styles.homeContainer}>
      <Nav refs={[headingRef, productsRef, aboutRef]} />
      <Heading ref={headingRef} />
      <Products ref={productsRef} />
      <About ref={aboutRef} />
      <LightSpot position={{ right: 0, top: '55%' }} />
      <LightSpot
        colors={{ primary: 'red' }}
        sizes={{ width: '500px', height: '500px' }}
        position={{ left: 0, top: '30%' }}
      />
      <LightSpot
        colors={{ primary: 'red' }}
        sizes={{ width: '300px', height: '300px' }}
        position={{ bottom: '10%', right: '30%' }}
      />
    </div>
  )
}

export default Home
