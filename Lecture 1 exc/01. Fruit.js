function solve(fruit, weight, price){

    let weightinKG = weight/1000
    let totalMoney = weightinKG * price

    console.log(`I need $${totalMoney.toFixed(2)} to buy ${weightinKG.toFixed(2)} kilograms ${fruit}.`)
}
solve('orange', 2500, 1.80)