import React from 'react'
import render from '../render'

describe('render', () => {
  test('Can render a component', () => {
    const Component = () => <div className="napoleon" />
    const wrapper = render(
      <div>
        <Component />
      </div>,
    )
    const el = wrapper.find('.napoleon')

    expect(el.length).toBeTruthy()
  })
})
