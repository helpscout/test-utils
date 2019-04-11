import React from 'react'
import mount from '../../mount'
import getBy from '../getBy'

describe('getBy', () => {
  test('Can retrieve DOM node by className', () => {
    const Component = () => (
      <div className="napoleon">
        <span className="tot" />
        <span className="tot" />
        <span className="tot" />
        <span className="tot" />
      </div>
    )
    const wrapper = mount(<Component />)
    const node = getBy(wrapper, '.tot')
    // @ts-ignore
    const len = node.length

    expect(node).toBeTruthy()
    expect(len).toBe(undefined)
  })

  test('Can retrieve DOM node by data-attr', () => {
    const Component = () => (
      <div className="napoleon">
        <span data-attr="tot" />
        <span data-attr="tot" />
        <span className="computer-hacking-skillz" />
        <span className="computer-hacking-skillz" />
      </div>
    )
    const wrapper = mount(<Component />)
    const node = getBy(wrapper, '[data-attr="tot"]')
    // @ts-ignore
    const len = node.length

    expect(node).toBeTruthy()
    expect(len).toBe(undefined)
  })

  test('Can retrieve DOM node by tag', () => {
    const Component = () => (
      <div className="napoleon">
        <span data-attr="tot" />
        <span data-attr="tot" />
        <span className="computer-hacking-skillz" />
        <span className="computer-hacking-skillz" />
      </div>
    )
    const wrapper = mount(<Component />)
    const node = getBy(wrapper, 'span')
    // @ts-ignore
    const len = node.length

    expect(node).toBeTruthy()
    expect(len).toBe(undefined)
  })
})
