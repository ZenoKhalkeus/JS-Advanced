function solve(input){
    let res = []
    for(let el of input){
        if(el < 0){
            res.unshift(el)
        }else{
            res.push(el)
        }
    }
    for(let el of res){
        console.log(el)
    }
}

solve([7, -2, 8, 9])