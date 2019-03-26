export function getAllBy(mounted, selector): Array<HTMLElement> {
  const nodes = mounted.find(selector)

  return nodes.reduce((collection, node) => {
    const domNode = node.getDOMNode()
    if (domNode) {
      return [...collection, domNode]
    }
    return collection
  }, [])
}

export default getAllBy
