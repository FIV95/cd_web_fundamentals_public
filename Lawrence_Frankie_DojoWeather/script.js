function alertMsg(element){
      alert("You have selected " + element.innerText)
}

let cookieMsg = document.querySelector('.cookieMessage');
let acceptButton = document.getElementById(cookieAcceptButton);

function cookieAccept(acceptButton){
      cookieMsg.style.display = "none"
}