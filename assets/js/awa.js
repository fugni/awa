function addText(text) {
    const newtext = document.createTextNode(text);
    const meow = document.getElementById("meow");
  
    meow.appendChild(newtext);
  }