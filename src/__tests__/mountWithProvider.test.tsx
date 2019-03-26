import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import mountWithProvider from '../mountWithProvider'

describe('mountWithProvider', () => {
  const Component = () => <div className="napoleon" />

  test('Can render a component', () => {
    const wrapper = mountWithProvider(<Component />)
    const el = wrapper.find('.napoleon')

    expect(el.length).toBeTruthy()
  })

  test('Can render a react-redux connected component', () => {
    const ConnectedComponent = connect()(Component)

    const wrapper = mountWithProvider(<ConnectedComponent />)
    const el = wrapper.find('.napoleon')

    expect(el.length).toBeTruthy()
  })

  test('Can render a react-router withRouter component', () => {
    const RoutedComponent = withRouter(Component)

    const wrapper = mountWithProvider(<RoutedComponent />)
    const el = wrapper.find('.napoleon')

    expect(el.length).toBeTruthy()
  })
})
