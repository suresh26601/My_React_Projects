import {createStore} from 'redux'
import {rootReducer} from './action/reducer'

const store = createStore(rootReducer)
export default store;