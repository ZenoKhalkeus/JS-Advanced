function extractText() {
    let itemNodes = 
      document.querySelectorAll("ul#items li");
    let textarea = 
      document.querySelector("#result");
    for (let node of itemNodes) {
      textarea.value += node.textContent + "\n";
    }
  }

  //HTML
  //<ul id="items">
  //<li>first item</li>
  //<li>second item</li>
  //<li>third item</li>
// </ul>
// <textarea id="result"></textarea>
// <br>
// <button onclick="extractText()">Extract Text</button>

  