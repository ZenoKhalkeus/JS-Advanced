let {assert} = require("chai")

let {isOddOrEven} = require("../02. Even Or Odd")

describe("test isOddOrEven functionality",()=>{
    describe("test isOddOrEven with incorrect value", ()=>{
        it("Result should be undefined with array argument", ()=>{
            assert.equal(isOddOrEven([]), undefined)
        })
        it("Result should be undefined with an empty object argument", ()=>{
            assert.equal(isOddOrEven({}), undefined)
        })
        it("Result should be undefined with object argument", ()=>{
            assert.equal(isOddOrEven({name: "Pesho"}), undefined)
        })
    
        it("Result should be undefined with number argument", ()=>{
            assert.equal(isOddOrEven(1), undefined)
        })
        it("Result should be undefined with boolean argument", ()=>{
            assert.equal(isOddOrEven(true), undefined)
        })
    
    
    })

    describe("test isOddOrEven with correct value", () =>{
        it("Result should be even with `Even`",()=>{
            assert.equal(isOddOrEven("love"), "even")
        })
        it("Result should be odd with `odd`",()=>{
            assert.equal(isOddOrEven("odd"), "odd")
        })
    })
})

