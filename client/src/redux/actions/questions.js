export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'
export const INCREMENT_QUESTION_INDEX = 'INCREMENT_QUESTION_INDEX'
export const getQuestions = (payload)=>({
    type:FETCH_QUESTIONS,
    payload
})
export const increamentQuestion = ()=>({
    type:INCREMENT_QUESTION_INDEX,
})