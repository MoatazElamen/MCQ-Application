import {createStore ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { answersReducer,questionReducer,userReducer } from "../reducers";

 const store = createStore(
    combineReducers({
        answersReducer,userReducer,questionReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
export default store;