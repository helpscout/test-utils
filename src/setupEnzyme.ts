const { hasAnyDep } = require('./utils')

const setupEnzyme = () => {
  if (!hasAnyDep('enzyme')) return
  const Enzyme = require('enzyme')
  let adapterVersion

  if (hasAnyDep('enzyme-adapter-react-16')) {
    adapterVersion = 16
  }
  if (hasAnyDep('enzyme-adapter-react-15')) {
    adapterVersion = 15
  }

  if (!adapterVersion) return

  const Adapter = require(`enzyme-adapter-react-${adapterVersion}`)

  Enzyme.configure({ adapter: new Adapter() })
}

afterEach(() => {
  document.body.innerHTML = ''
})

module.exports = setupEnzyme
