import * as React from 'react'
import exists from '../exists'
import mount from '../mount'

describe('exists', () => {
  test('Returns true if exists', () => {
    const Component = () => <div className="napoleon" />

    const wrapper = mount(<Component />)
    expect(exists(wrapper, 'div.napoleon')).toBe(true)
  })

  test('Returns false if does not exists', () => {
    const Component = () => <div className="napoleon" />

    const wrapper = mount(<Component />)
    expect(exists(wrapper, 'span.napoleon')).toBe(false)
  })
})
