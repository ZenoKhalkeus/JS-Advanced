function solve(matrix){

    for(let i = 0; i <matrix.length-1; i++){
        let sumRowOne = matrix[i].reduce((a,b) => a + b)
        let sumRowTwo = matrix[i+1].reduce((a,b) => a + b)
        let sumColOne = 0
        let sumColTwo = 0
        for(let col = 0; col < matrix.length; col++){
            sumColOne += matrix[i][col]
            sumColTwo += matrix[i+1][col]
        }
        if(sumRowOne !== sumRowTwo || sumColOne !== sumColTwo){
            return false
        }
    }
    return true
}
solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )