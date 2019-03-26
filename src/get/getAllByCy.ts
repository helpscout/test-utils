import getAllBy from './getAllBy'

export function getAllByCy(wrapper, selector) {
  return getAllBy(wrapper, `[data-cy=${selector}`)
}

export default getAllByCy
