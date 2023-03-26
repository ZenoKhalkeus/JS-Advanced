function solve(a, b){
    let firstNum = +a
    let secondNum = +b
    let result = 0

    for(let i = firstNum; i <= secondNum; i++){
        result+=i
    }
    console.log(result)

}
solve('-8', '20')