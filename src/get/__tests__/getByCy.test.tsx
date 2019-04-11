import React from 'react'
import mount from '../../mount'
import getByCy from '../getByCy'

describe('getByCy', () => {
  test('Can retrieve DOM node by data-cy', () => {
    const Component = () => (
      <div data-cy="napoleon">
        <span data-cy="tot" />
        <span data-cy="tot" />
        <span data-cy="tot" />
        <span data-cy="tot" />
      </div>
    )
    const wrapper = mount(<Component />)
    const node = getByCy(wrapper, 'tot')
    // @ts-ignore
    const len = node.length

    expect(node).toBeTruthy()
    expect(len).toBe(undefined)
  })
})
