function solve(){

    return {
        fighter(name) {
            obj = {
                name,
                health:100,
                stamina:100
        }
        obj.fight = () =>{
            console.log(`${obj.name} slashes at the foe!`)
            obj.stamina -=1

        }
        return obj
    },
    mage(name) {
        obj = {
            name,
            health:100,
            mana:100
    }
    obj.cast = (spell) =>{
        console.log(`${obj.name} cast ${spell}!`)
        obj.mana -=1

    }
    return obj
}
    
}
}
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);

