function solve(pies, startflavor, endflavor){

    const start = pies.indexOf(startflavor)
    const end = pies.indexOf(endflavor)+1

    const result = pies.slice(start,end)
    return result

}

solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
)