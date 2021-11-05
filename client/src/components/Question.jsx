
import React,{useState,useEffect} from 'react'
import {Card , Form ,Button ,Toast,ToastContainer } from 'react-bootstrap'
import {answerQuestion} from '../redux/actions/answers';
import { useHistory } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
const Question = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {questionData,changeQuestion} = props;
    const {authedUser} = useSelector((state)=>({authedUser:state.userReducer.authedUser}))
    let [pickedChoice , setPickedChoice ] = useState(null);
    let [show ,setShow ] = useState(false)
    const {title , choices,_id} = questionData
    useEffect(() => {
        if(authedUser.trim().length === 0) {
            history.push('/')
        }
    }, [authedUser,history])
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(pickedChoice !== null){
            changeQuestion()
            dispatch(answerQuestion({_id, answer:pickedChoice}))
        }else{
            setShow(true)
        }
    }
    
    const handleChange = (e)=>{
        setPickedChoice(e.target.value)
    }
    return (
        <div className="question-container">
            <Card className="container p-3 mt-6 text-center ">
                <ToastContainer className="position-absolute" position="bottom-end">
                    <Toast   onClose={() => setShow(false)} show={show} delay={3000} bg='danger' autohide>
                        <Toast.Header>
                            <strong className="me-auto">MCQ Application</strong>
                        </Toast.Header>
                        <Toast.Body>You should choose answer from the following </Toast.Body>
                    </Toast>
                </ToastContainer>
                <Form className="question-card d-flex flex-column text-center  flex-shrink-1 text-center" onSubmit={handleSubmit}>
                    <Form.Group className="mw-75">
                        <Card.Title>
                            <Form.Text className="">
                                {title}
                            </Form.Text>
                        </Card.Title>
                        <Card.Body className="d-grid gap-2 border justify-content-center text-center">
                            {choices.map((choice)=>(
                                <Form.Check
                                type="radio"
                                aria-label="radio 2"
                                label={choice.title}
                                value={choice.title}
                                onChange={handleChange}
                                checked={pickedChoice === choice.title}
                                key={choice._id}
                                // value="food" // <-- once enabled I can't select it
                            />
                            ))}
                        </Card.Body>
                    </Form.Group>
                    <Button className="w-25 text-center mx-auto mt-3"  variant="primary" type="submit" size="sm">
                        Submit
                    </Button>
                </Form>
            </Card>
        </div>
    )
}

export default Question;