const Exercises = require('./Exercise');
const exercises = new Exercises();

test("should return true if n is even, false otherwise",()=>{
    const isEven = exercises.isEven(4);
    expect(isEven).toBeTruthy();
})

test("should return true if n is even, false otherwise",()=>{
    const isEven = exercises.isEven(-1);
    expect(isEven).toBeFalsy();
})

test("should return true if n is even, false otherwise",()=>{
    const isEven = exercises.isEven(2.2);
    expect(isEven).toBeFalsy();
})

test("should remove at least one element from the array 'arr'",()=>{
    const filteredArr = exercises.removeAtLeastOne([1,2,3,4,5,6]);
    expect(filteredArr).not.toHaveLength(6);
})

test("should remove at least one element from the array 'arr'",()=>{
    const filteredArr = exercises.removeAtLeastOne([]);
    expect(filteredArr).toHaveLength(0);
})

test("should return a clean string without these symbols: '!', '#', '.', ',','''",()=>{
    const simplifiesString = exercises.simplify('wfh!$!!!');
    expect(simplifiesString).toEqual('wfh$');
})

test("should return a clean string without these symbols: '!', '#', '.', ',','''",()=>{
    const simplifiesString = exercises.simplify('!');
    expect(simplifiesString).toEqual('');
})

test("should return {error: 'Need at least one boolean'}",()=>{
    const validateArr = exercises.validate([]);
    expect(typeof validateArr).toBe('object');
})

test("should return true",()=>{
    const validateArr = exercises.validate([true,true,false]);
    expect(validateArr).toBeTruthy();
})

test("should return false",()=>{
    const validateArr = exercises.validate([true,false,false]);
    expect(validateArr).toBeFalsy();
})

test("should add to stuff x and y",()=>{
    const spy = jest.spyOn(Array.prototype, 'push');
    exercises.add(1,2);
    expect(spy).toHaveBeenCalled();

})
