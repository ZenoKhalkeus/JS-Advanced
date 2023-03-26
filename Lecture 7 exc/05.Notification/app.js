function notify(message) {
  let divContent = document.getElementById("notification")
  divContent.innerText = message
  let currentDisplayState = divContent.style.display
  divContent.style.display = currentDisplayState === "none" || currentDisplayState === "" ? "block" : "none"

  divContent.addEventListener("click", toggleDisplayStyle)

  function toggleDisplayStyle(e){
    
    e.target.style.display = "none"
  }
}