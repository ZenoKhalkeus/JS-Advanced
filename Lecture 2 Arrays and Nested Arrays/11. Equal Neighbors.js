function solve(input){

    let equalPairs = 0
    
    for(let i = 0; i < input.length; i++){
        let nextArray = i+1
        
        let currentArray = input[i]
        //array[1=i][0=y]
        for(let y = 0; y < currentArray.length; y++){
            if(nextArray < input.length){
                if(currentArray[y] === input[nextArray][y]){
                    equalPairs++
                };
            }
            if(currentArray[y] === currentArray[y+1]){
                equalPairs++
            }
            
        }
        

    }

    console.log(equalPairs)

}
solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['done', 'done', 'yet', '5']]
)