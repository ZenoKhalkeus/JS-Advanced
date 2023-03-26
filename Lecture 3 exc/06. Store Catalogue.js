function solve(data){

    let res = {}
    for(let el of data){
        [product, price] = el.split(" : ")
        price = +price
        res[product] = price
    }
    
    let sorted = Array.from(Object.entries(res))
    sorted = sorted.sort((a,b) => a[0].localeCompare(b[0]))
    
    let prevChar = ""
    for(let [key, value] of sorted){
        let firstChar = key[0]
        if(firstChar !== prevChar){
            prevChar = firstChar
            console.log(firstChar)
        }
        console.log(`  ${key}: ${value}`)
    }

    
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)