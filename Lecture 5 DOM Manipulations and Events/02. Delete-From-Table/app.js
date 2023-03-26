function deleteByEmail() {
    let email = document.getElementsByName("email")[0].value 

    let tableCells = document.querySelectorAll("#customers td:nth-child(2)")

    
    for(let cell of tableCells){
        if(cell.textContent === email){
            cell.parentElement.remove()
            document.getElementById('result').textContent = "Deleted.";
            return
        }
    }

    document.getElementById('result').textContent = "Not found.";

}