import React,{useState} from 'react';
import {connect} from 'react-redux';
import Question from './Question';
import {useSelector,useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {increamentQuestion} from '../redux/actions/questions'
const Questions = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()

    let {currentQuestionIndex} = useSelector((state)=>({currentQuestionIndex:state.questionReducer.currentQuestionIndex}))
    const {questions} = props;
    let [currentQuestion , setCurrentQuestion] = useState(questions[0]);
    const handleQuestionChange  = ()=>{
        if(currentQuestionIndex < 4){
            dispatch(increamentQuestion())
            setCurrentQuestion(questions[currentQuestionIndex+1])
        }else{
            history.push('/result')
        }
    }

    return (

        <div className="">
        <Question questionData={currentQuestion} changeQuestion={handleQuestionChange}  />
        </div>
    );
}

const mapStateToProps = (state)=>({
    questions:state.questionReducer.questions,
})
export default connect(mapStateToProps)(Questions);
