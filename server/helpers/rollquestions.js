// this generates array of indexes to serve based on amount and range given;
function  generateRandominRange(amount,range){ 
    let randomIndexes =  [];
    const generateRandom = ()=>{
        return Math.floor(Math.random() * range)
    };
 
    while(randomIndexes.length < amount ){
        const rundNum = generateRandom()
        if(randomIndexes.indexOf(rundNum) === -1 ){
            randomIndexes.push(rundNum)
        }
    }
    return randomIndexes;
}

// function rollquestions : 2params : (questions , amount) and return randomlly picked questions
const rollquestions = (questions , amount , range=10 )=>{
    
    const randIArray = generateRandominRange(amount,range);
    return questions.filter((question,idx) =>{

        let exists = randIArray.some((index) => index === idx)
        if(exists) return question
    })
}
module.exports = rollquestions