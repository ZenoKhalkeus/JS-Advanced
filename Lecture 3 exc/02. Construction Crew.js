function solve(data){

    let res = {
    }
    res.weight = data.weight
    res.experience = data.experience
    res.levelOfHydrated = data.levelOfHydrated
    res.dizziness = data.dizziness
    

    if(res.dizziness == true){
        res.dizziness = false
        let waterNeeded = 0.1 * res.weight * res.experience
        res.levelOfHydrated += waterNeeded
    }

    return res

    
}

solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  )