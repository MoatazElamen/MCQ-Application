import {SET_USER_SCORE,SET_AUTHED_USER} from '../actions/user'
const initialState = {authedUser:'',score:0 }
const userReducer  = (state=initialState , action)=>{
    switch(action.type){
        case SET_AUTHED_USER:
            return {...state, authedUser:action.payload}
        case SET_USER_SCORE:
            return {...state, score:action.payload}
        default: 
            return state
    }
}
export default userReducer