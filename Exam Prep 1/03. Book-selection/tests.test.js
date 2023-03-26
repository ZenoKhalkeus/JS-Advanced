let bookSelection = require(`../03. Book-selection/solution`)
let {assert} = require(`chai`)

describe("Tests for Book Selection", ()=>{
    describe("Test isGenreSuitable",()=>{
        function concatenateStr(genre,age){
            return `Books with ${genre} genre are not suitable for kids at ${age} age`
        }
        it("wrong genre and age",()=>{
            let expectText = concatenateStr("Thriller",12)
            assert.equal(bookSelection.isGenreSuitable("Thriller",12),expectText)
            expectText = concatenateStr("Thriller",10)
            assert.equal(bookSelection.isGenreSuitable("Thriller",10),expectText)
             expectText = concatenateStr("Horror",12)
            assert.equal(bookSelection.isGenreSuitable("Horror",12),expectText)
            expectText = concatenateStr("Horror",10)
            assert.equal(bookSelection.isGenreSuitable("Horror",10),expectText)

        })
        it("correct genre Thriller and correct age",()=>{
            let expText = "Those books are suitable"
            assert.equal(bookSelection.isGenreSuitable("Thriller",13),expText)
            assert.equal(bookSelection.isGenreSuitable("Thriller",25),expText)

        })
        it("correct genre Horror and correct age",()=>{
            let expText = "Those books are suitable"
            assert.equal(bookSelection.isGenreSuitable("Horror",13),expText)
            assert.equal(bookSelection.isGenreSuitable("Horror",25),expText)
        })
        it("correct genre Comedy and correct age",()=>{
            let expText = "Those books are suitable"
            assert.equal(bookSelection.isGenreSuitable("Comedy",13),expText)
            
        })
    })
    describe("test isItAffordable",()=>{
        it("don't have enough money", ()=>{
            assert.equal(bookSelection.isItAffordable(11,10),"You don't have enough money")
            assert.equal(bookSelection.isItAffordable(51,50),"You don't have enough money")
        })
        it("Book bought",()=>{
            assert.equal(bookSelection.isItAffordable(10,11),"Book bought. You have 1$ left")
            assert.equal(bookSelection.isItAffordable(10,10),"Book bought. You have 0$ left")
            assert.equal(bookSelection.isItAffordable(10,50),"Book bought. You have 40$ left")
        })
        it("Wrong data type",()=>{
            assert.throw(()=>{bookSelection.isItAffordable("pesho",10)}, "Invalid input") //!! for throw Error
            assert.throw(()=>{bookSelection.isItAffordable("pesho","gosho")}, "Invalid input")
            assert.throw(()=>{bookSelection.isItAffordable(10,"gosho")}, "Invalid input")
            assert.throw(()=>{bookSelection.isItAffordable("10","10")}, "Invalid input") //string!!
        })
    })
    describe("test suitableTitles",()=>{
        it("Wrong data type", ()=>{
            assert.throw(()=>{bookSelection.suitableTitles("gosho","pesho")},"Invalid input")
            assert.throw(()=>{bookSelection.suitableTitles(10,"pesho")},"Invalid input")
            assert.throw(()=>{bookSelection.suitableTitles({},"pesho")},"Invalid input")
            assert.throw(()=>{bookSelection.suitableTitles([{title: "The Da Vinci Code", genre: "Thriller"}],10)},"Invalid input")
            assert.throw(()=>{bookSelection.suitableTitles([{title: "The Da Vinci Code", genre: "Thriller"}],[])},"Invalid input")
            assert.throw(()=>{bookSelection.suitableTitles([{title: "The Da Vinci Code", genre: "Thriller"}],{})},"Invalid input")
            assert.throw(()=>{bookSelection.suitableTitles({},{})},"Invalid input")
            assert.throw(()=>{bookSelection.suitableTitles(10,10)},"Invalid input")
        })
        it("correct data",()=>{
            let input = [
                {title: "The Da Vinci Code", genre: "Thriller"},
                {title: "The Da Vinci Code1", genre: "Thriller"},
                {title: "The Da Vinci Code2", genre: "Horror"}
            ]
            let result = ["The Da Vinci Code", "The Da Vinci Code1"]
            assert.equal(bookSelection.suitableTitles(input,"Thriller").join(" "),result.join(" "))
            result = ["The Da Vinci Code2"]
            assert.equal(bookSelection.suitableTitles(input,"Horror").join(" "),result.join(" "))
            result = []
            assert.equal(bookSelection.suitableTitles(input,"Comedy").join(" "),result.join(" "))

        })
    })
})