function solve(data){

    let res = []
    let inputdata = data.shift().split("|")
    inputdata = inputdata.filter(x => x!= "").map(el => el.trim())
    let [Town, Latitude, Longitude] = inputdata
    
    for(el of data){
        let currentRes = {}
        let info = el.split("|")
    info = info.filter(x => x!= "").map(el => el.trim())
    let [currentTown, currentLatitude, currentLongitude] = info
        currentLatitude = +currentLatitude
        currentLatitude = currentLatitude.toFixed(2)
        currentLatitude = +currentLatitude
        currentLongitude = +currentLongitude
        currentLongitude = currentLongitude.toFixed(2)
        currentLongitude = +currentLongitude

        currentRes[Town] = currentTown
        currentRes[Latitude] = currentLatitude
        currentRes[Longitude] = currentLongitude
        res.push(currentRes)
    }

    let JSONres = JSON.stringify(res)
    return JSONres
}
solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)