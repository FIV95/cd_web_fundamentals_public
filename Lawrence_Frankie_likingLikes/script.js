var likeCount = document.querySelectorAll(".likeCount");

function likeIncrease(likeButtonElement) {
	var likeCountElement =
		likeButtonElement.parentElement.querySelector(".likeCount");
      var countNumber = Number(likeCountElement.innerText);
      console.log(countNumber)
      countNumber = countNumber + 1
      console.log(countNumber)
      likeCountElement.innerText = (countNumber)
      console.log(countNumber)
}
