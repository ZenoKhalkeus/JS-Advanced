function solve(data){

    let res = []

    for(let el of data){
        [name, level, items] = el.split(" / ")

        level = +level
        items = items ? items.split(', ') : []
        res.push({name, level, items})
        
    }

    res = JSON.stringify(res)
    return res

}
solve(['Isacc / 25 / ',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)