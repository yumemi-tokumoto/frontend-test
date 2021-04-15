import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import { userInputFieldReducer } from 'src/store/userRegist'

const rootReducer = combineReducers({
  userInputField: userInputFieldReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(logger))
export type Dispatch = typeof store.dispatch
export type RootAction = Parameters<Dispatch>[0]
