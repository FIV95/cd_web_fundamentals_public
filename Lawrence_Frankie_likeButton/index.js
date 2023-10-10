var buttonClicks = 0
var likes = 0
var dislikes = 0

function clicktest(element) {
      buttonClicks += 1;
	if (element.innerText === "Dislike") {
		element.innerText = "Like";
            likes += 1;
	} else {
		element.innerText = "Dislike";
            dislikes += 1;
	}
      console.log(buttonClicks, likes, dislikes)
}

function sizeChange(element,fontsize){
      element.style.fontSize = fontsize;
}

function SizeChangeOver(element) {
      element.style.fontSize = "xx-large";
}

function SizeChangeOut(element) {
      element.style.fontSize = "small";
}

var p = document.querySelector('p');

p.style.color = "red"

petimg = document.querySelector('img')

function picturechange() {
      if (petimg.alt === "doggy picture"){
            petimg.src = "images/67111-1.png"
            petimg.alt = "kittykat"
      } else {
            (petimg.alt = "doggy picture")
            petimg.src = "images/pngtree-thai-bangkaew-dog-doggy-puppy-photo-image_2798211.jpg"
      }
}

// onclick
// mouseout
// mouseover
// document.querySelector
//onmouseenter
// this
//.style
//.color.etc.font-size
// Math.floor(Math.random() * colorArray.length)
