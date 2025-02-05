const images = document.querySelectorAll(".img-wrapper > img");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const allDots = document.querySelectorAll(".dot");

let counter = 0;

nextBtn.addEventListener("click", nextSlide);

function nextSlide() {
  images[counter].style.animation = "nextOut 0.5s forwards";
  if (counter >= images.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  images[counter].style.animation = "nextIn 0.5s forwards";
  pointerDot();
}

prevBtn.addEventListener("click", prevSlide);
function prevSlide() {
  images[counter].style.animation = "prevOut 0.5s forwards";
  if (counter == 0) {
    counter = images.length - 1;
  } else {
    counter--;
  }
  images[counter].style.animation = "prevIn 0.5s forwards";
  pointerDot();
}
function autoSliding() {
  deleteInterval = setInterval(function () {
    nextSlide();
    pointerDot();
  }, 1000);
}
autoSliding();

const slideContainer = document.querySelector(".slide-container");
slideContainer.addEventListener("mouseover", function () {
  clearInterval(deleteInterval);
});
function pointerDot() {
  allDots.forEach(
    (dot) => (dot.className = dot.className.replace("active", ""))
  );
  allDots[counter].className += " active";
}

allDots.forEach(function (dot) {
  dot.addEventListener("click", function (e) {
    e.currentTarget.classList.add("active");
    const dotIndex = e.currentTarget.getAttribute("attr");
    if (dotIndex > counter) {
      images[counter].style.animation = "nextOut 0.5s forwards";
      counter = dotIndex;
      images[counter].style.animation = "nextIn 0.5s forwards";
      counter = dotIndex;
    } else if (dotIndex == counter) {
      return;
    } else if (dotIndex < counter) {
      images[counter].style.animation = "prevOut 0.5s forwards";
      counter = dotIndex;
      images[counter].style.animation = "prevIn 0.5s forwards";
    }
    pointerDot()
  });
});

