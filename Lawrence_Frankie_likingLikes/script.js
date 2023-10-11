// var likeCount = document.querySelectorAll(".likeCount");

// function likeIncrease(likeButtonElement) {
// 	var likeCountElement =
// 		likeButtonElement.parentElement.querySelector(".likeCount");
//       var countNumber = Number(likeCountElement.innerText);
//       console.log(countNumber)
//       countNumber = countNumber + 1
//       console.log(countNumber)
//       likeCountElement.innerText = (countNumber)
//       console.log(countNumber)
// }

// search for like buttons on my page -- DONE
// for each button we need an eventListener -- DONE
// we look for the 'click' event -- DONE
// we search for our likeCount within the parent element -- DONE
//we convert that likeCount data into a integer/number -- DONE
// we have to +1 that count number - DONE
// we want to finish by changing the innerText of the original count element to that updated value that got plus 1'd.

const likeButtons = document.querySelectorAll('.likeButton');
      for (let i = 0;i<likeButtons.length;i++){
      likeButtons[i].addEventListener('click', countIncrease);
      }

      function countIncrease(clickEvent){
            console.log(clickEvent);
            const likeButton = clickEvent.srcElement;
            console.log(likeButton)
            const likeCountElement = likeButton.parentElement.querySelector(".likeCount");
            let countNumber = Number(likeCountElement.innerText);
            countNumber = countNumber + 1
            likeCountElement.innerText = countNumber
      }



