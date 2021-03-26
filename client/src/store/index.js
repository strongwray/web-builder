import { createStore, combineReducers } from "redux"
import { moduleReducer } from "./module/module"

const store = createStore(combineReducers({ moduleReducer }))

export default  store
