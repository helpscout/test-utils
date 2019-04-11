import { mount as baseMount } from 'enzyme'

const mount = (node, options = {}) => {
  const el = document.createElement('div')
  el.id = 'TestUtilsMountNode'
  document.body.appendChild(el)

  const mergedOptions = {
    ...options,
    attachTo: el,
  }

  return baseMount(node, mergedOptions)
}

export default mount
