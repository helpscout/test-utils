export function getAllBy(mounted, selector): Array<HTMLElement> {
  const nodes = mounted.find(selector)

  return nodes.reduce((collection, node) => {
    return [...collection, node.getDOMNode()]
  }, [])
}

export default getAllBy
