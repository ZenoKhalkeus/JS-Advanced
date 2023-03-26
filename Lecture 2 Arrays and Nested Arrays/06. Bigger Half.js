function solve(input){

    input.sort((a,b)=> a- b)
    const middle = Math.floor(input.length/2)
    const result = input.slice(middle)
    return result
}

solve([4, 7, 2, 5])