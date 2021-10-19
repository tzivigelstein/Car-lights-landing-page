import { SET_ACTIVE_PRODUCT } from './appTypes'
import products from '../../../database'

export default (state, { type, payload }) => {
  const actions = {
    [SET_ACTIVE_PRODUCT]: {
      ...state,
      activeProduct: products.find(({ id }) => id === payload),
    },
  }

  return actions[type] || state
}
