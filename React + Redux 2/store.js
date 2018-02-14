import { createStore } from 'redux'
import { counter } from './src/reducers/incrementReducer'

export default createStore(counter);