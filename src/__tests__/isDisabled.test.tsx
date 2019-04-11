import * as React from 'react'
import isDisabled from '../isDisabled'
import mount from '../mount'

describe('isDisabled', () => {
  test('Returns true if component is disabled', () => {
    const Component = () => <input className="napoleon" disabled />
    const HOC = () => WrappedComponent => () => <WrappedComponent />
    const WrappedComponent = HOC()(Component)

    const wrapper = mount(<WrappedComponent />)

    expect(isDisabled(wrapper)).toBeTruthy()
  })

  test('Returns false if component is not disabled', () => {
    const Component = () => <input className="napoleon" disabled={false} />
    const HOC = () => WrappedComponent => () => <WrappedComponent />
    const WrappedComponent = HOC()(Component)

    const wrapper = mount(<WrappedComponent />)

    expect(isDisabled(wrapper)).toBeFalsy()
  })
})
