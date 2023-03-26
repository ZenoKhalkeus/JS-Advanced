function solve(arr){

    let res = arr.sort((a,b) =>a.localeCompare(b))
    for(let i = 0; i < res.length; i++){
        console.log(`${i+1}.${res[i]}`)
    }
}
solve(["John", "Bob", "Christina", "Ema"])