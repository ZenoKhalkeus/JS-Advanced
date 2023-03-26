window.addEventListener("load", solve);

function solve() {
    let firstName = document.getElementById("first-name")
    let lastName = document.getElementById("last-name")
    let age = document.getElementById("age")
    let storyTitle = document.getElementById("story-title")
    let genre = document.getElementById("genre")
    let story = document.getElementById("story")
 
    let previewList = document.getElementById('preview-list')
    let bodyClass = document.querySelector("body")
 
    let publishButton = document.getElementById("form-btn")
    publishButton.addEventListener("click", publish)
 
    function publish(e){
      e.preventDefault()
      e.target.setAttribute("disabled",true)
      let firstNameValue = firstName.value 
      let lastNameValue = lastName.value 
      let ageValue = age.value 
      let storyTitleValue = storyTitle.value 
      let genreValue = genre.value 
      let storyValue = story.value 
 
      if(!firstNameValue || !lastNameValue || !ageValue ||!storyTitleValue || !genreValue || !storyValue){
        return
      }
 
      let liElement = document.createElement("li")
      liElement.classList.add("story-info")
      liElement.innerHTML = 
        `<article>
        <h4>Name: ${firstNameValue} ${lastNameValue}</h4>
        <p>Age: ${ageValue}</p>
        <p>Title: ${storyTitleValue}</p>
        <p>Genre: ${genreValue}</p>
        <p>${storyValue}</p
        </article>`
 
        liElement.innerHTML+=`
        <button class = "save-btn">Save Story</button>
        <button class = "edit-btn">Edit Story</button>
        <button class = "delete-btn">Delete Story</button>`
 
        const saveBtn = liElement.querySelector('.save-btn');
 
        const editBtn = liElement.querySelector('.edit-btn');
        editBtn.disabled = false
        const deleteBtn = liElement.querySelector('.delete-btn');
        editBtn.disabled = false
 
 
        saveBtn.addEventListener('click', saveStory);
        editBtn.addEventListener("click",editStory)
        deleteBtn.addEventListener('click', deleteStory);
 
        previewList.appendChild(liElement)
 
        firstName.value = ""
        lastName.value = ""
        age.value = ""
        storyTitle.value = ""
        genre.value = ""
        story.value = "" 
 
 
        function saveStory(e){
          let main = document.querySelector("#main")
          main.textContent = ""
          let h1 = document.createElement("h1")
          h1.textContent = "Your scary story is saved!"
          main.appendChild(h1)
 
        }
        function editStory(e){
          liElement.remove()
          firstName.value = firstNameValue
          lastName.value = lastNameValue
          age.value = ageValue
          storyTitle.value = storyTitleValue
          genre.value = genreValue
          story.value = storyValue
          publishButton.disabled = false
        }
        function deleteStory(e){
          liElement.remove()
          publishButton.disabled = false
        }
    }
 
}
