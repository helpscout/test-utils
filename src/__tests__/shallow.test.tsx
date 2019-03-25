import React from 'react'
import shallow from '../shallow'

describe('shallow', () => {
  test('Can shallow mount a component', () => {
    const Component = () => <div className="napoleon" />
    const wrapper = shallow(<Component />)
    const el = wrapper.find('.napoleon')

    expect(el.length).toBe(1)
  })
})
