import { createStore, combineReducers } from "redux"
import { STORE_MODULE_SPACE, moduleReducer } from "./module/module"

const store = createStore(combineReducers({
    [STORE_MODULE_SPACE]: moduleReducer,
}))

export default  store
