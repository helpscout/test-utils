import React from 'react'
import mount from '../mount'

describe('mount', () => {
  test('Can mount a component', () => {
    const Component = () => <div className="napoleon" />
    const wrapper = mount(<Component />)
    const el = wrapper.find('.napoleon')

    expect(el.length).toBe(1)
  })
})
