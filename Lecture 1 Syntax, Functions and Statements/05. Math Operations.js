function solve(nOne, nTwo, operator){

    let result = 0
    switch (operator){
        case "+": 
        result = nOne + nTwo
        console.log(result)
        break;
        case "-": 
        result = nOne - nTwo
        console.log(result)
        break;
        case "*":
        result = nOne *nTwo
        console.log(result)
        break;
        case "/":
            result = nOne / nTwo
            console.log(result)
            break
        case "%":
            result = nOne % nTwo
            console.log(`${result}`)
            break
        case "**":
            result = nOne ** nTwo
            console.log(result)
            break;
    }
}

solve(3, 5.5, '*')