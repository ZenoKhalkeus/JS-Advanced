function solve(numbers){

    console.log(aggregate(numbers, x=> x))
    console.log(aggregate(numbers, x=> 1/x))
    console.log(aggregate(numbers, x=> x.toString()))

    function aggregate(numbers, func){
        let result = 0
        for(let i = 0; i < numbers.length; i++){
            newResult = func(numbers[i]) //calls the functin x => x ...
            if(typeof newResult === "string" && i == 0){
                result = newResult
            }else{
                result += newResult
            }
            
         
        }
        return result
    }

}

solve([2,4,8,16])