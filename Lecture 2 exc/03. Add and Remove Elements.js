function solve(arr){

    let res = []
    let num = 1
    for(let command of arr){
        switch(command){
            case "add":
                res.push(num)
                num++
                break;
            case "remove":
                res.pop()
                num++
                break;
        }
    }
    if(res.length === 0){
        console.log("Empty")
    }else{
        console.log(res.join("\n"))
    }
}
solve(['add', 
'add', 
'add', 
'add']
)