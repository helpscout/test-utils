import getBy from './get/getBy'

const exists = (reactWrapper, selector: string) =>
  !!getBy(reactWrapper, selector)

export default exists
