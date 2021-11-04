const express = require('express');
const Cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const PORT = process.env.PORT || 3001;
const Question = require('./models/question')
const shuffle = require('./helpers/shuffle')
const rollquestions = require('./helpers/rollquestions')
mongoose.connect(`mongodb://quizapp:${process.env.DATABASE_PASSWORD}@cluster0-shard-00-00.dafx9.mongodb.net:27017,cluster0-shard-00-01.dafx9.mongodb.net:27017,cluster0-shard-00-02.dafx9.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-xj959l-shard-0&authSource=admin&retryWrites=true&w=majority`).then(()=>{
    console.log('database connected successfully')
}).catch(err=> console.error(err))

// adding 10 questions to the database
// const questionsMock = [
//     {"title":"CSS stands for -" , "answer":"Cascading style sheets" , "choices":[{"title":"Cascade style sheets"},{"title":"Color and style sheets"},{"title":"Cascading style sheets"},{"title":"None of the above"}]},
//     {"title":"Which of the following is the correct syntax for referring the external style sheet?" , "answer":"<link rel='stylesheet' type='text/css' href='example.css'>" , "choices":[{"title":"<style src = example.css>"},{"title":"<style src = 'example.css' >"},{"title":"<stylesheet> example.css </stylesheet>"},{"title":"<link rel='stylesheet' type='text/css' href='example.css'>"}]},
//     {"title":"The property in CSS used to change the background color of an element is -" , "answer":"background-color" , "choices":[{"title":"bgcolor"},{"title":"color"},{"title":"background-color"},{"title":"All of the above"}]},
//     {"title":"The property in CSS used to change the text color of an element is -" , "answer":"color" , "choices":[{"title":"bgcolor"},{"title":"color"},{"title":"background-color"},{"title":"All of the above"}]},
//     {"title":"The CSS property used to control the element's font-size is -" , "answer":"font-size" , "choices":[{"title":"text-style"},{"title":"text-size"},{"title":"font-size"},{"title":"None of the above"}]},
//     {"title":"The HTML attribute used to define the inline styles is -" , "answer":"style" , "choices":[{"title":"style"},{"title":"styles"},{"title":"class"},{"title":"None of the above"}]},
//     {"title":"The HTML attribute used to define the internal stylesheet is -" , "answer":"<style>" , "choices":[{"title":"<style>"},{"title":"style"},{"title":"<link>"},{"title":"<script>"}]},
//     {"title":"Which of the following CSS property is used to set the background image of an element?" , "answer":"background-image" , "choices":[{"title":"background-attachment"},{"title":"background-image"},{"title":"background-color"},{"title":"None of the above"}]},
//     {"title":"Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?" , "answer":"p {background-color : yellow;}" , "choices":[{"title":"p {background-color : yellow;}"},{"title":"p {background-color : #yellow;}"},{"title":"all {background-color : yellow;}"},{"title":"all p {background-color : #yellow;}"}]},
//     {"title":"Which of the following is the correct syntax to display the hyperlinks without any underline?" , "answer":"a {text-decoration : none;}" , "choices":[{"title":"a {text-decoration : underline;}"},{"title":"a {decoration : no-underline;}"},{"title":"a {text-decoration : none;}"},{"title":"None of the above"}]},
// ]
// Question.insertMany(questionsMock,(error,docs)=>{
//     console.log(docs)
// })
const app = express();

app.use(Cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.send('mcq web application')
})
// the questions endpoint "responsible of returning the questions"
app.get('/questions', (req,res)=>{
Question.find().select(' -answer -__v').limit(10).exec().then(questions=>{
    let shuffled = rollquestions(questions,5).map(question=>{
       question.choices = shuffle(question.choices)
       return question
    })
    return res.json(shuffled)
})
})
// the answers endpoint "takes answers , compare with stored in database and  return user score"
app.post('/answers',async(req,res)=>{
    let answers = req.body.answers;
    let score = 0;
    for(answer of answers){
        let storedQuestion = await Question.findById(answer._id);
        if(storedQuestion.answer == answer.answer){
            score++;
        }
    }
    return res.json({score})
})
app.listen(PORT , _=>console.log(`backend server is working on port ${PORT}`))