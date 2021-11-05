
import {FETCH_QUESTIONS ,INCREMENT_QUESTION_INDEX} from '../actions/questions'

let initialState = {questions:[],currentQuestionIndex:0};

const questionReducer = (state=initialState , action)=>{
    switch(action.type){
        case FETCH_QUESTIONS:
            return {...state,questions:action.payload}
        case INCREMENT_QUESTION_INDEX:
            return {...state , currentQuestionIndex:state.currentQuestionIndex+1}
        default: 
            return state
    }
}
export default questionReducer