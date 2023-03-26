function solve(radius){

    if(typeof radius === "number"){
        let result = radius * radius * Math.PI
        console.log(result.toFixed(2))
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`)
    }
}

solve("name")