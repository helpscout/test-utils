import React from 'react'
import mount from '../../mount'
import getAllByCy from '../getAllByCy'

describe('getAllByCy', () => {
  test('Can retrieve all DOM nodes by data-cy', () => {
    const Component = () => (
      <div data-cy="napoleon">
        <span data-cy="tot" />
        <span data-cy="tot" />
        <span data-cy="tot" />
        <span data-cy="tot" />
      </div>
    )
    const wrapper = mount(<Component />)
    const nodes = getAllByCy(wrapper, 'tot')

    expect(nodes.length).toBe(4)
  })
})
