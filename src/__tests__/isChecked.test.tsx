import * as React from 'react'
import isChecked from '../isChecked'
import mount from '../mount'

describe('isChecked', () => {
  test('Returns true if component is disabled', () => {
    const Component = () => (
      <input
        className="napoleon"
        type="checkbox"
        onChange={jest.fn()}
        checked
      />
    )
    const HOC = () => WrappedComponent => () => <WrappedComponent />
    const WrappedComponent = HOC()(Component)

    const wrapper = mount(<WrappedComponent />)

    expect(isChecked(wrapper)).toBeTruthy()
  })

  test('Returns false if component is not disabled', () => {
    const Component = () => (
      <input
        className="napoleon"
        type="checkbox"
        onChange={jest.fn()}
        checked={false}
      />
    )
    const HOC = () => WrappedComponent => () => <WrappedComponent />
    const WrappedComponent = HOC()(Component)

    const wrapper = mount(<WrappedComponent />)

    expect(isChecked(wrapper)).toBeFalsy()
  })
})
