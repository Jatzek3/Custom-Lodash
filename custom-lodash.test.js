import CustomLoadash from './custom-lodash.js'

let _ = new CustomLoadash()


test('split an array in to parts of given length',(_) =>{
    expect(_.chunk([1,2,3,4,5,6,7],3)).toBe([[1,2,3],[4,5,6],[7]])
})