let {assert} = require("chai")
let {lookupChar} = require("../03. Char Lookup")

describe("Test lookupChar with incorrect type", ()=>{
    it("result should be undefined with incorrect first parameter", ()=>{
        assert.equal(lookupChar(5, 3), undefined)
    })
    it("result should be undefined with incorrect second parameter", ()=>{
        assert.equal(lookupChar("Pesho", "Gosho"), undefined)
    })

    it("result should be undefined with decimal second parameter", ()=>{
        assert.equal(lookupChar("Pesho",0.99), undefined)
    })
    it("result should be undefined with array first parameter", ()=>{
        assert.equal(lookupChar([],0), undefined)
    })
})

describe("Test lookupChar with correct type, but the value of the index is incorrect", ()=>{
    it("result should be Incorrect index with bigger index", ()=> {
        assert.equal(lookupChar("Todor",100),"Incorrect index")
    })
    it("result should be Incorrect index with equal index", ()=> {
        assert.equal(lookupChar("Todor",5),"Incorrect index")
    })
    it("result should be Incorrect index with negative index", ()=> {
        assert.equal(lookupChar("Todor",-1),"Incorrect index")
    })
})

describe("Test lookupChar with correct type and value", () =>{
    it("result should be T with zero Index (Todor)",()=>{
        assert.equal(lookupChar("Todor",0),"T")
    })
    it("result should be r with last Index (Todor)",()=>{
        assert.equal(lookupChar("Todor",4),"r")
    })
})

