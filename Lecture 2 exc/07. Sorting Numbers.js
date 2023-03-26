function solve(arr){

    let res = []
    arr.sort((a,b) => a - b)

    for(let i = 0; arr.length > 0;i++){
        res.push(arr.shift())
        if(arr.length == 0){
            break
        }
        res.push(arr.pop())
    }
    return res
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18]))