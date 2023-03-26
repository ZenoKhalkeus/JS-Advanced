function solve() {

    document.getElementById("add").addEventListener("click",addList)
    let resetBtn = document.getElementById("reset")
    resetBtn.addEventListener("click", resetField)

    let recipient = document.getElementById("recipientName")
    let title = document.getElementById("title")
    let message = document.getElementById("message")

    let listMails = document.getElementById('list')
    let sentMails = document.querySelector('.sent-list')
    let deletedMails = document.querySelector('.delete-list')


    function addList(e){
        e.preventDefault()

        const recipientValue = recipient.value 
        const titleValue = title.value 
        const messageValue = message.value 

        if(!recipientValue || !titleValue || !messageValue){
            return 
        }

        const liElement = document.createElement('li');
 
        liElement.innerHTML =
            `<h4>Title: ${titleValue}</h4>
            <h4>Recipient Name: ${recipientValue}</h4>
            <span>${messageValue}</span>
            <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="delete" id="delete">Delete</button>
            </div>`;

        const sendBtn = liElement.querySelector('#send');
        const deleteBtn = liElement.querySelector('#delete');
        sendBtn.addEventListener('click', sendMail);
        deleteBtn.addEventListener('click', deleteMail);
     
        listMails.appendChild(liElement)
        clearInput()
        function sendMail() {
            liElement.remove();
    
            const sentLiElement = document.createElement('li');
            sentLiElement.innerHTML =
                `<span>To: ${recipientValue}</span>
                <span>Title: ${titleValue}</span>
                <div class="btn">
                <button type="submit" class="delete">Delete</button>
                </div>`
    
            const deleteBtn = sentLiElement.querySelector('.delete');
    
            deleteBtn.addEventListener('click', deleteMail);
            sentMails.appendChild(sentLiElement);
        }
        function deleteMail(e){
            
                e.currentTarget.parentElement.parentElement.remove();
     
                const deletedEl = document.createElement('li');
                deletedEl.innerHTML =
                    `<span>To: ${recipientValue}</span>
                      <span>Title: ${titleValue}</span>`
            
                deletedMails.appendChild(deletedEl);
            
        }

    }

    function clearInput(){
        recipient.value = ""
        title.value = ""
        message.value = ""
    }

    

    
    function resetField(e){
        e.preventDefault()
        recipient.value = ""
        title.value = ""
        message.value = ""
    }

    
}
solve()