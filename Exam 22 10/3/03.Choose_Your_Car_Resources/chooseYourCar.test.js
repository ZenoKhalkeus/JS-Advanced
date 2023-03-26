let chooseYourCar = require(`../03.Choose_Your_Car_Resources/chooseYourCar`)
let {assert} = require(`chai`)

describe("Testing functionality of chooseYourCar", function() {
    describe("choosingType (type, color, year)  function", function() {
        it("testing with incorrect year value", function() {
            assert.throw(()=>{chooseYourCar.choosingType("Sedan","green", 1899)}, "Invalid Year!") // <1900
            assert.throw(()=>{chooseYourCar.choosingType("Sedan","green", 2023)}, "Invalid Year!") //>2022
            
        });
        it("testing Sedan type",()=>{
            assert.throw(()=>{chooseYourCar.choosingType("Sedana","green", 1901)}, "This type of car is not what you are looking for.")
            assert.throw(()=>{chooseYourCar.choosingType("sedan","green", 1901)}, "This type of car is not what you are looking for.")
            assert.throw(()=>{chooseYourCar.choosingType("seDaN","green", 1901)}, "This type of car is not what you are looking for.")
        })
        it("testing year 2010 + color functionality", ()=>{
            let color = "green"
            let expectText = "This green Sedan meets the requirements, that you have."
            let wrongText = "This Sedan is too old for you, especially with that green color."
            assert.equal(chooseYourCar.choosingType("Sedan",color, 2010), expectText)
            assert.equal(chooseYourCar.choosingType("Sedan",color, 2011), expectText)
            assert.equal(chooseYourCar.choosingType("Sedan",color, 2009), wrongText)
            assert.equal(chooseYourCar.choosingType("Sedan",color, 2000), wrongText)

        })
     });
     describe("brandName (brands, brandIndex) function",function(){
        //let array = ["BMW", "Toyota", "Peugeot"]
        it("testing invalid input",()=>{
            let array = ["BMW", "Toyota", "Peugeot"]
            assert.throw(()=>{chooseYourCar.brandName(array,"5")}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.brandName(array,"gosho")}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.brandName(array,{})}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.brandName(array,[])}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.brandName(array,3)}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.brandName(array,-1)}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.brandName(array,4)}, "Invalid Information!")

            // invalid first param
            assert.throw(()=>{chooseYourCar.brandName({},4)}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.brandName([],4)}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.brandName("array",4)}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.brandName(4,4)}, "Invalid Information!")

            // invalid both params
            assert.throw(()=>{chooseYourCar.brandName([],{})}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.brandName({},{})}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.brandName("gosho","pesho")}, "Invalid Information!")

        })
        it("testing functionality of returning a correct string",()=>{
            let array = ["BMW", "Toyota", "Peugeot"]
            let index = 0
            let expectText = "Toyota, Peugeot"

            assert.equal(chooseYourCar.brandName(array,index), expectText)
            assert.equal(chooseYourCar.brandName(array,1), "BMW, Peugeot")
            assert.equal(chooseYourCar.brandName(array,2), "BMW, Toyota")
        })
     })

     describe("carFuelConsumption (distanceInKilometers, consumptedFuelInLitres) functionality",function(){
        it("testing with invalid input",()=>{
            assert.throw(()=>{chooseYourCar.carFuelConsumption("5","5")}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.carFuelConsumption(5,"5")}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.carFuelConsumption(5,"5")}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.carFuelConsumption(0,0)}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.carFuelConsumption(0,5)}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.carFuelConsumption(5,0)}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.carFuelConsumption(-1,5)}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.carFuelConsumption(5,-1)}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.carFuelConsumption(5,[])}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.carFuelConsumption(5,{})}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.carFuelConsumption(5,"pesho")}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.carFuelConsumption([],5)}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.carFuelConsumption({},5)}, "Invalid Information!")
            assert.throw(()=>{chooseYourCar.carFuelConsumption("pesho",5)}, "Invalid Information!")
        })
        it("testing with valid input",()=>{
            // liters - test
            assert.equal(chooseYourCar.carFuelConsumption(1,10), "The car burns too much fuel - 1000.00 liters!")
            assert.equal(chooseYourCar.carFuelConsumption(1.5,20), "The car burns too much fuel - 1333.33 liters!")
            assert.equal(chooseYourCar.carFuelConsumption(20,1.41), "The car burns too much fuel - 7.05 liters!")
            assert.equal(chooseYourCar.carFuelConsumption(20,1.4), "The car is efficient enough, it burns 7.00 liters/100 km.")
            assert.equal(chooseYourCar.carFuelConsumption(20,1), "The car is efficient enough, it burns 5.00 liters/100 km.")
            assert.equal(chooseYourCar.carFuelConsumption(20,0.5), "The car is efficient enough, it burns 2.50 liters/100 km.")
            
        })
     })
     // TODO: …
});
