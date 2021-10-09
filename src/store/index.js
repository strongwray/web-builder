import { createStore, combineReducers } from "redux";
import { pageReducer } from './page';


const store = createStore(combineReducers({
    pageR: pageReducer
}));

export default  store
