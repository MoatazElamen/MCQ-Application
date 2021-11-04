const rollquestions = require('../helpers/rollquestions')

const questionsMock = [
    {"title":"CSS stands for -" , "answer":"Cascading style sheets" , "choices":[{"title":"Cascade style sheets"},{"title":"Color and style sheets"},{"title":"Cascading style sheets"},{"title":"None of the above"}]},
    {"title":"Which of the following is the correct syntax for referring the external style sheet?" , "answer":"<link rel='stylesheet' type='text/css' href='example.css'>" , "choices":[{"title":"<style src = example.css>"},{"title":"<style src = 'example.css' >"},{"title":"<stylesheet> example.css </stylesheet>"},{"title":"<link rel='stylesheet' type='text/css' href='example.css'>"}]},
    {"title":"The property in CSS used to change the background color of an element is -" , "answer":"background-color" , "choices":[{"title":"bgcolor"},{"title":"color"},{"title":"background-color"},{"title":"All of the above"}]},
    {"title":"The property in CSS used to change the text color of an element is -" , "answer":"color" , "choices":[{"title":"bgcolor"},{"title":"color"},{"title":"background-color"},{"title":"All of the above"}]},
    {"title":"The CSS property used to control the element's font-size is -" , "answer":"font-size" , "choices":[{"title":"text-style"},{"title":"text-size"},{"title":"font-size"},{"title":"None of the above"}]},
    {"title":"The HTML attribute used to define the inline styles is -" , "answer":"style" , "choices":[{"title":"style"},{"title":"styles"},{"title":"class"},{"title":"None of the above"}]},
    {"title":"The HTML attribute used to define the internal stylesheet is -" , "answer":"<style>" , "choices":[{"title":"<style>"},{"title":"style"},{"title":"<link>"},{"title":"<script>"}]},
    {"title":"Which of the following CSS property is used to set the background image of an element?" , "answer":"background-image" , "choices":[{"title":"background-attachment"},{"title":"background-image"},{"title":"background-color"},{"title":"None of the above"}]},
    {"title":"Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?" , "answer":"p {background-color : yellow;}" , "choices":[{"title":"p {background-color : yellow;}"},{"title":"p {background-color : #yellow;}"},{"title":"all {background-color : yellow;}"},{"title":"all p {background-color : #yellow;}"}]},
    {"title":"Which of the following is the correct syntax to display the hyperlinks without any underline?" , "answer":"a {text-decoration : none;}" , "choices":[{"title":"a {text-decoration : underline;}"},{"title":"a {decoration : no-underline;}"},{"title":"a {text-decoration : none;}"},{"title":"None of the above"}]},
]
describe('roll questions function',()=>{
    test('it takes array , amount , and range then return shuffled copy of the given array' , ()=>{
        expect(rollquestions(questionsMock,3,10)).toBeInstanceOf(Array)
    })
})
