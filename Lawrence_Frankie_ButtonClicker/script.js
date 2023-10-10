function logChange(element){
      if (element.innerText === "Log Out"){
            element.innerText = "Login";
      } else {
            element.innerText = "Log Out";
      }
}

function definitionEntry(element){
      var button = document.getElementById("addDefinitionButton");
      button.remove();
}

likeB = document.querySelectorAll("likeButton")

function likeAlert(){
      alert('Ninja was liked')
}