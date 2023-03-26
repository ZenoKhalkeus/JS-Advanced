function solve(input){

    let result = []
    for(let i = 0; i < input.length; i++){
        result = result.concat(input[i])
    }
    result.sort((a,b) => a - b)
    let biggest = result.pop()
    return biggest
}
solve([[20, 50, 10],
    [8, 33, 145]]
   )