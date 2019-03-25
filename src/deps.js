import { MemoryRouter as Router } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const mockReducer = () => {}
const mockStore = createStore(mockReducer)

module.exports = {
  Provider,
  Router,
  createStore,
  store: mockStore,
}
