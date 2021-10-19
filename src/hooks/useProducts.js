import { useContext } from 'react'
import appContext from '../context/app/appContext'

const useProducts = () => useContext(appContext)

export default useProducts
