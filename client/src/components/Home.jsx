import React , {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import {handleFetchingQuestions} from '../redux/actions/shared'
import {useDispatch,useSelector} from 'react-redux'
import {setUser} from '../redux/actions/user'
import classes  from '../styles/landing.module.css'

import {Form , Button} from 'react-bootstrap'
const Home = (props) => {
    const dispatch = useDispatch()
    const {questions} = useSelector((state)=>({questions:state.questionReducer.questions}))
    let history = useHistory()
    const [name,setName] = useState('')
    useEffect(() => {
        dispatch(handleFetchingQuestions())
    },[dispatch])
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(setUser(name))
        history.push('/questions')
    }
    return (
        <div className={classes.landing} >
            <h1 className={classes.brand}>MCQ Application</h1>
            <Form className="text-center row" onSubmit={handleSubmit}>
                <Form.Control type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)} />
                <Button className="mt-2" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
export default Home;
