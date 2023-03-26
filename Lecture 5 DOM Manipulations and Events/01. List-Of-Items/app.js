function addItem() {
    let list = document.getElementById("items")
    let newItemValue = document.getElementById("newItemText").value 
    let liItem = document.createElement("li")
    liItem.textContent = newItemValue
    list.appendChild(liItem)
    document.getElementById("newItemText").value = ""
}