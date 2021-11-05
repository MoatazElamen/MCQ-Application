import React,{useEffect} from 'react';
import {sendAnswers} from '../redux/actions/shared'
import {useSelector , useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
const Result = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const answers = useSelector((state)=>({answers:state.answersReducer.answers}))
    const {score,authedUser} = useSelector((state)=>({score:state.userReducer.score , authedUser:state.userReducer.authedUser}))

    useEffect(() => {
        if(authedUser.trim().length === 0){
            history.push('/')
        }
        dispatch(sendAnswers(answers.answers))
    },[answers.answers,authedUser,dispatch,history])

    return (
        <div className="final-result">
            <div>
                Well Done {authedUser}! , You've Just Tested Your Css Skills
            </div>
            <h1 className="score">
                {score} / 5
            </h1>
        </div>

    );
}

export default Result;
