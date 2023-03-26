function solve(input){

    let initDashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]

    let isFirstPlayer = true
    for(let coordinates of input){
        let [row, col] = coordinates.split(" ")

        if(initDashboard[row][col]){
            console.log("This place is already taken. Please choose another!")
            continue
        }
        let marker = isFirstPlayer ? "X" : "O"
        initDashboard[row][col] = marker
        for(let i=0; i < initDashboard.length; i++){
            if(initDashboard[i][0] === marker && initDashboard[i][1] ===marker &&
                initDashboard[i][2] === marker){
                    console.log(`Player ${marker} wins!`)
                    initDashboard.forEach(row =>console.log(row.join("\t")))
                    return
                }else if(initDashboard[0][i] ===marker&&
                    initDashboard[1][i] === marker &&
                    initDashboard[2][i] === marker){
                        console.log(`Player ${marker} wins!`)
                        initDashboard.forEach(row =>console.log(row.join("\t")))
                        return
                }else if(initDashboard[0][0] ===marker&&
                    initDashboard[1][1] === marker &&
                    initDashboard[2][2] === marker){
                        console.log(`Player ${marker} wins!`)
                        initDashboard.forEach(row =>console.log(row.join("\t")))
                        return
                }else if(initDashboard[0][2] ===marker&&
                    initDashboard[1][1] === marker &&
                    initDashboard[2][0] === marker){
                        console.log(`Player ${marker} wins!`)
                        initDashboard.forEach(row =>console.log(row.join("\t")))
                        return
                }
        }
        let isFreeSpace = false
        for(let x = 0; x <initDashboard.length; x++){
            for(let y = 0; y < initDashboard[x].length; y++){
                if(!initDashboard[x][y]){
                    isFreeSpace = true
                    break;
                }
            }
            if(isFreeSpace){
                break
            }
        }
        if(!isFreeSpace){
            console.log("The game ended! Nobody wins :(")
            initDashboard.forEach(row =>console.log(row.join("\t")))
            return
        }
        isFirstPlayer = !isFirstPlayer
    }
}

solve(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
)