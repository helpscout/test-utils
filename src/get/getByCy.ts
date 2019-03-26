import getAllByCy from './getAllByCy'

export function getByCy(wrapper, selector) {
  return getAllByCy(wrapper, selector)[0]
}

export default getByCy
