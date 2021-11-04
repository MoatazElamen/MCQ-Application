const shuffle = require('../helpers/shuffle');


const AnswersMock = [
    {"title":"style"},{"title":"styles"},{"title":"class"},{"title":"None of the above"}
]
describe('shuffle function',()=>{
    test('it takes array of objects and return it shuffled',()=>{
        expect(shuffle(AnswersMock)).toContainEqual({"title":"class"})
    })
})