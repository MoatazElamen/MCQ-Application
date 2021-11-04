const express = require('express');
const Cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const PORT = process.env.PORT || 3001;
const question = require('./models/question')

mongoose.connect(`mongodb://quizapp:${process.env.DATABASE_PASSWORD}@cluster0-shard-00-00.dafx9.mongodb.net:27017,cluster0-shard-00-01.dafx9.mongodb.net:27017,cluster0-shard-00-02.dafx9.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-xj959l-shard-0&authSource=admin&retryWrites=true&w=majority`).then(()=>{
    console.log('database connected successfully')
}).catch(err=> console.error(err))

const app = express();

app.use(Cors());




app.get('/',(req,res)=>{
    res.send('mcq web application')
})
// the question endpoint "responsible of returning the questions"
app.get('/questions', (req,res)=>{

})
// the answers endpoint "takes answers , compare with stored in database and  return user score"
app.post('/answers',(req,res)=>{

})
app.listen(PORT , _=>console.log(`backend server is working on port ${PORT}`))