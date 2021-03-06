import React from 'react'
import mount from '../../mount'
import getAllBy from '../getAllBy'

describe('getAllBy', () => {
  test('Can retrieve all DOM nodes by className', () => {
    const Component = () => (
      <div className="napoleon">
        <span className="tot" />
        <span className="tot" />
        <span className="tot" />
        <span className="tot" />
      </div>
    )
    const wrapper = mount(<Component />)
    const nodes = getAllBy(wrapper, '.tot')

    expect(nodes.length).toBe(4)
  })

  test('Can retrieve all DOM nodes by data-attr', () => {
    const Component = () => (
      <div className="napoleon">
        <span data-attr="tot" />
        <span data-attr="tot" />
        <span className="computer-hacking-skillz" />
        <span className="computer-hacking-skillz" />
      </div>
    )
    const wrapper = mount(<Component />)
    const nodes = getAllBy(wrapper, '[data-attr="tot"]')

    expect(nodes.length).toBe(2)
  })

  test('Can retrieve all DOM nodes by tagName', () => {
    const Component = () => (
      <div className="napoleon">
        <span className="tot" />
        <span className="tot" />
        <span className="tot" />
        <span className="tot" />
      </div>
    )
    const wrapper = mount(<Component />)
    const nodes = getAllBy(wrapper, 'span')

    expect(nodes.length).toBe(4)
  })

  test('Returns an empty array if selector cannot be found', () => {
    const Component = () => (
      <div className="napoleon">
        <span className="tot" />
        <span className="tot" />
        <span className="tot" />
        <span className="tot" />
      </div>
    )
    const wrapper = mount(<Component />)
    const nodes = getAllBy(wrapper, 'button')

    expect(nodes.length).toBe(0)
  })

  test('Returns an empty array if selector is empty', () => {
    const Component = () => null
    const wrapper = mount(<Component />)
    const nodes = getAllBy(wrapper, 'button')

    expect(nodes.length).toBe(0)
  })
})
