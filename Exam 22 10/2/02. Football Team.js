class footballTeam {
    constructor(clubName, country){
        this.clubName = clubName
        this.country = country
        this.invitedPlayers = []
    }

    newAdditions(footballPlayers){
        
        for(let i = 0; i < footballPlayers.length; i++){
            let [name,age,playerValue] = footballPlayers[i].split("/")
            let currentPlayer = this.invitedPlayers.find(currentel => currentel.name === name)
            if(!currentPlayer){
                this.invitedPlayers.push({
                    name,
                    age: Number(age),
                    playerValue: Number(playerValue)
                })
            }else{
                if(currentPlayer.playerValue < playerValue){
                    currentPlayer.playerValue = playerValue
                }
            }
            
        }
        
        let buff = []
        this.invitedPlayers.map(x => buff.push(`${x.name}`))
        return `You successfully invite ${buff.join(", ")}.`
    }

    signContract(selectedPlayer){
        for(let i = 0; i < selectedPlayer.length; i++){
            let [name, playerOffer] = selectedPlayer.split("/")
            let currentPlayer = this.invitedPlayers.find(currentel => currentel.name === name)
            if(!currentPlayer){
                throw new Error(`${name} is not invited to the selection list!`)
            }
            if(playerOffer < currentPlayer.playerValue){
                let difference = Math.abs(playerOffer - currentPlayer.playerValue)
                throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${difference} million more are needed to sign the contract!`)
            }else{
                currentPlayer.playerValue = "Bought"
                return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
            }


        }
    }
    ageLimit(name, age){
        let currentPlayer = this.invitedPlayers.find(currentel => currentel.name === name)
        if(!currentPlayer){
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if(currentPlayer.age < age){
            let difference = Math.abs(currentPlayer.age - age)
            if(difference < 5){
                return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`
            }else if(difference >= 5){
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        }else if(currentPlayer.age >= age){
            return `${name} is above age limit!`
        }
        
    }
    transferWindowResult(){
        let buff = "Players list:"
        let players = []
        this.invitedPlayers.sort((a,b)=>a.name.localeCompare(b.name))
        for(let i = 0; i < this.invitedPlayers.length; i++){
            players.push(`Player ${this.invitedPlayers[i].name}-${this.invitedPlayers[i].playerValue}`)
        }
        return `${buff}\n${players.join("\n")}`
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());



