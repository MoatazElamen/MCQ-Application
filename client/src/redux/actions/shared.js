import axios from 'axios';
import { getQuestions } from './questions';
import {setUserScore} from './user'
export const handleFetchingQuestions = ()=>{
    return (dispatch) => {
        axios.get('http://localhost:3001/questions')
        .then(data=>{
            dispatch(getQuestions(data.data))
        })
    }
}
export const sendAnswers = (answers)=>{
    let data = {answers:answers}
    return (dispatch) => {
        axios.post('http://localhost:3001/answers',data)
        .then(data=>{
            dispatch(setUserScore(data.data.score))
        })
        .catch(err=>console.log(err))
    }

}