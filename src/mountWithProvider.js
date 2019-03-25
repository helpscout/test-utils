import * as React from 'react'
import mount from './mount'
import * as deps from './deps'

const { Provider, Router } = deps

const defaultOptions = {}

export function mountWithProvider(Component, options = defaultOptions) {
  const mergedOptions = { ...defaultOptions, options }
  const { store, ...mountOptions } = mergedOptions
  const mountStore = store || deps.store

  const wrapper = mount(
    <Provider store={mountStore}>
      <Router>{Component}</Router>
    </Provider>,
    mountOptions,
  )

  const wrappedComponent = wrapper
    .childAt(0) // Provider
    .childAt(0) // Router
    .childAt(0) // Component

  return wrappedComponent
}

export default mountWithProvider
