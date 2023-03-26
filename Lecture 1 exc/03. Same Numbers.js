function solve(num){
    
    let numAsString = num.toString()
    let firstDigit = numAsString[0]
    let isSame = true
    let sum = 0
    for(let i = 0; i < numAsString.length; i++){
        if(numAsString[i] !== firstDigit){
            isSame = false
        }
        sum += +numAsString[i]
    }
    console.log(isSame)
    console.log(sum)
}
solve(2222222)