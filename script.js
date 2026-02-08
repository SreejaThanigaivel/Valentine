let accesscode=prompt("please enter the secret code:");
if(accesscode!== "SreeVish38"){
  document.documentElement.innerHTML="<h1> Access Denied</h1><p>Incorrect code</p>";
}
let attempts = 0;

function askPassword() {
  let password;
  while (attempts < 6) {
    password = prompt("Enter the passcode:");
    attempts++;
    if (password === "24102023") {
      document.querySelector(".heart-container").style.display = "none";
      document.querySelector(".text").style.display = "none";
      // show the slide (use the ID selector) and ensure the heading is visible
      const slide = document.querySelector("#valentineSlide");
      if (slide) {
        const h1 = slide.querySelector("h1");
        if (h1) h1.style.display = "block";
        slide.style.display = "block";
      }
      window.location.href="will u.html";
      return;
    } else {
      if (attempts === 3) {
        alert("Hint: It's an Important Date");
      } else if (attempts < 6) {
        alert("Wrong password! Try again.");
      } else {
        alert("Too many attempts!");
      }
    }
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll(".letter");
  const cards = document.querySelectorAll(".card");
  const container = document.querySelector(".container");

  letters.forEach(letter => {
    letter.addEventListener("click", () => {
      const id = letter.getAttribute("data-letter");
      const cardToOpen = document.getElementById("card" + id);

      // Close other cards
      cards.forEach(card => card.classList.remove("active-card"));

      // Open selected card
      cardToOpen.classList.add("active-card");

      // Dim background
      container.classList.add("dimmed");
    });
  });

  // Clicking outside card closes it
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.remove("active-card");
      container.classList.remove("dimmed");
    });
  });

});
