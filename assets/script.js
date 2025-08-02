const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let currentSlideIndex = 0;
let arrows = document.querySelectorAll(".arrow");
let dotContainer = document.querySelector(".dots");

// Add event listeners to the arrows
for (let arrow of arrows) {
  arrow.addEventListener("click", (event) => {
    updateSlideIndex(event.target.id);
  });
}

// Add dot elements to the dot container
for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) {
    dot.classList.add("dot_selected");
  }
  dotContainer.appendChild(dot);
}

/**
 * Function to update the current slide index
 * @param {string} arrowDirection : "arrow_left" or "arrow_right"
 */
function updateSlideIndex(arrowDirection) {
	if (arrowDirection === "arrow-left") {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
      currentSlideIndex = slides.length - 1;
    }
  } else {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
      currentSlideIndex = 0;
    }
  }
  updateSlideImage();
	updateDots();
}

/**
 * Function to update the slide image and tagline
 */
function updateSlideImage() {
  let imageElement = document.querySelector(".banner-img");
  let tagLineElement = document.querySelector("#banner p");

  imageElement.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
  tagLineElement.innerHTML = slides[currentSlideIndex].tagLine;
}

/**
 * Function to update the dots based on the current slide index
 */
function updateDots() {
  let dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === currentSlideIndex) {
      dot.classList.add("dot_selected");
    } else {
      if (dot.classList.contains("dot_selected")) {
        dot.classList.remove("dot_selected");
      }
    }
  });
}
