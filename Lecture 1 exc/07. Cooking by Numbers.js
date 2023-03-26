function solve(num, command1, command2, command3, command4, command5){

    num = +num
    switch(command1){
        case "chop":
            num /= 2
            console.log(num)
        break;
        case "dice":
            num = Math.sqrt(num)
            console.log(num)
            break;
        case "spice":
            num+=1
            console.log(num)
            break;
        case "bake":
            num *=3
            console.log(num)
            break;
        case "fillet":
            num *= 0.80
            console.log(num)
            break;
    }
    switch(command2){
        case "chop":
            num /= 2
            console.log(num)
        break;
        case "dice":
            num = Math.sqrt(num)
            console.log(num)
            break;
        case "spice":
            num+=1
            console.log(num)
            break;
        case "bake":
            num *=3
            console.log(num)
            break;
        case "fillet":
            num *= 0.80
            console.log(num)
            break;
    }
    switch(command3){
        case "chop":
            num /= 2
            console.log(num)
        break;
        case "dice":
            num = Math.sqrt(num)
            console.log(num)
            break;
        case "spice":
            num+=1
            console.log(num)
            break;
        case "bake":
            num *=3
            console.log(num)
            break;
        case "fillet":
            num *= 0.80
            console.log(num)
            break;
    }
    switch(command4){
        case "chop":
            num /= 2
            console.log(num)
        break;
        case "dice":
            num = Math.sqrt(num)
            console.log(num)
            break;
        case "spice":
            num+=1
            console.log(num)
            break;
        case "bake":
            num *=3
            console.log(num)
            break;
        case "fillet":
            num *= 0.80
            console.log(num)
            break;
    }
    switch(command5){
        case "chop":
            num /= 2
            console.log(num)
        break;
        case "dice":
            num = Math.sqrt(num)
            console.log(num)
            break;
        case "spice":
            num+=1
            console.log(num)
            break;
        case "bake":
            num *=3
            console.log(num)
            break;
        case "fillet":
            num *= 0.80
            console.log(num)
            break;
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')