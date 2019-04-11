const hasClass = (reactWrapper, className: string) => {
  return !!reactWrapper.getDOMNode().classList.contains(className)
}

export default hasClass
