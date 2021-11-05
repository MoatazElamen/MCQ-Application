import {SET_QUESTION_UNSWER} from '../actions/answers'
const initialState = {
    answers:[]
};

const answersReducer = (state=initialState , action)=>{
    switch (action.type){
        case SET_QUESTION_UNSWER:
            return {...state,answers:[...state.answers,action.payload]}
        default: 
            return state;
    }
}
export default answersReducer