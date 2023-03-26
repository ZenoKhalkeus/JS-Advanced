let companyAdministration = require('../03. Company-administration/companyAdministration')
let {assert} = require('chai')

describe("Tests companyAdministration", function(){

    describe("Test hiringEmployee", function (){
        
        it("Test different position", function(){
            assert.throw(()=>companyAdministration.hiringEmployee("Todor","DifferentPosition",30), "We are not looking for workers for this position.") // ()=>!!!
        })
        it("Test experience with greater 3 years",()=>{
            let exp = "Todor was successfully hired for the position Programmer."
            assert.equal(companyAdministration.hiringEmployee("Todor", "Programmer", 3),exp)
            assert.equal(companyAdministration.hiringEmployee("Todor","Programmer",30),exp) 
        })
        it("Test experience with invalid value",()=>{
            let exp = "Todor is not approved for this position."
            assert.equal(companyAdministration.hiringEmployee("Todor","Programmer",1),exp)
            assert.equal(companyAdministration.hiringEmployee("Todor","Programmer",2),exp)
        })
    })
    describe("Test calculateSalary",function(){
        
        it("test calculateSalary with wrong value",()=>{
            assert.throw(()=>companyAdministration.calculateSalary(-10),"Invalid hours")
            assert.throw(()=>companyAdministration.calculateSalary("Gosho"),"Invalid hours")
        })
        it("test calculateSalary with valid value",()=>{
            assert.equal(companyAdministration.calculateSalary(0),0)
            assert.equal(companyAdministration.calculateSalary(1),15)
            assert.equal(companyAdministration.calculateSalary(15),15*15)
            assert.equal(companyAdministration.calculateSalary(160),160*15)
        })
        it("test calculateSalary bonus",()=>{
            assert.equal(companyAdministration.calculateSalary(161),161*15+1000)
            assert.equal(companyAdministration.calculateSalary(200),200*15 + 1000)
        })
    })
    describe("Test firedEmployee",()=>{
        it("test firedEmp with wrong data",()=>{
            assert.throw(()=>companyAdministration.firedEmployee("pesho",0),"Invalid input")
            assert.throw(()=>companyAdministration.firedEmployee("{}",1),"Invalid input")
            assert.throw(()=>companyAdministration.firedEmployee(1,[]),"Invalid input")
            assert.throw(()=>companyAdministration.firedEmployee(["Todor"],2),"Invalid input")
            assert.throw(()=>companyAdministration.firedEmployee(["todor"],-1),"Invalid input")
            assert.throw(()=>companyAdministration.firedEmployee(["Todor"],"pesho"),"Invalid input")
        })
        it("test firedEmp",()=>{
            assert.equal(companyAdministration.firedEmployee(["todor"],0),"")
            assert.equal(companyAdministration.firedEmployee(["todor","gosho"],0),"gosho")
            assert.equal(companyAdministration.firedEmployee(["todor","gosho","pesho"],0),"gosho, pesho")
            assert.equal(companyAdministration.firedEmployee(["todor","gosho","pesho"],1),"todor, pesho")
            assert.equal(companyAdministration.firedEmployee(["todor","gosho","pesho"],2),"todor, gosho")
        })
    })
})