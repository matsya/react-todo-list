import { applyMiddleware, compose , createStore } from 'redux'
import reducer from './reducer'
import looger from 'redux-logger'

let finalCreateStore = compose(
	applyMiddleware(looger())
)(createStore)

export default function configureStore (initialState = {todos: [] }) {
	return createStore(reducer,initialState)
}