function setName(element) {
      console.log(element.value);
      nameSpan.innerText =element.value;
}

let nameSpan = document.querySelector('#name')
// let footToOrder = document.querySelector('food')
var foodToOrder ="Pizza";

function pickFood(element){
      console.log("The Food is " + element.value);
      foodToOrder = element.value;
}

function order(){
      console.log("You are about to order " + foodToOrder)
      alert('You are about to order a ' + foodToOrder)

}

function chooseLunch(element){
      alert('you are about to order '+ element.value + ' for lunch.')
}

let nameTag = document.querySelector('#name-tag');
function setName(element){
      // console.log(element.value);
      nameTag.innerText = element.value;
}