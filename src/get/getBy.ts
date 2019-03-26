import getAllBy from './getAllBy'

export function getByAttr(wrapper, selector) {
  return getAllBy(wrapper, selector)[0]
}

export default getByAttr
