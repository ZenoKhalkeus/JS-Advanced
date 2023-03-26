function solve(input){

    let townData = input
        .map(el =>{
            let data = el.split(" <-> ")
            return{
                name:data[0],
                population: Number(data[1])
            }
        })

    let registry = {}
    for(let town of townData){
        if(registry[town.name] ===  undefined){
            registry[town.name] = town.population
        }else{
            registry[town.name] += town.population
        }
    }
    
    for(let key in registry){
        console.log(`${key} : ${registry[key]}`)
    }
}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)