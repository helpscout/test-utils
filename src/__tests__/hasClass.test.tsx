import * as React from 'react'
import hasClass from '../hasClass'
import mount from '../mount'

describe('hasClass', () => {
  test('Can retrieve className from a component', () => {
    const Component = () => <div className="napoleon" />

    const wrapper = mount(<Component />)

    expect(hasClass(wrapper, 'napoleon')).toBeTruthy()
  })

  test('Can retrieve className from a component with multiple classNames', () => {
    const Component = () => <div className="napoleon pedro uncle rico" />

    const wrapper = mount(<Component />)

    expect(hasClass(wrapper, 'napoleon')).toBeTruthy()
  })

  test('Can retrieve className from a HOC wrapped component', () => {
    const Component = () => <div className="napoleon" />
    const HOC = () => WrappedComponent => () => <WrappedComponent />
    const WrappedComponent = HOC()(Component)

    const wrapper = mount(<WrappedComponent />)

    expect(hasClass(wrapper, 'napoleon')).toBeTruthy()
  })

  test('Returns false if className does not exist', () => {
    const Component = () => <div className="napoleon" />

    const wrapper = mount(<Component />)

    expect(hasClass(wrapper, 'pedro')).toBeFalsy()
  })
})
