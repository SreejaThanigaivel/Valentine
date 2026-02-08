const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container.yes");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// change the position of no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// yes button functionality
yesBtn.addEventListener("click", () => {
  console.log("Yes button clicked");
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    console.log("Heart animation complete");
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    
    if (gifResult) {
      gifResult.play();
    }
    
    // Navigate to gifts page after 2 seconds
    setTimeout(() => {
      console.log("Navigating to gifts.html");
      window.location.href = "gifts.html";
    }, 2000);
  }, 3000);
});
