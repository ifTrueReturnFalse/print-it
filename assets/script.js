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

carouselInit();

/**
 * Function to initialize the carousel
 */
function carouselInit() {
  addArrowListener();
  dynamicDotCreation();
}

/**
 * Function to add the listener on the two arrows of the carousel
 */
function addArrowListener() {
  const arrows = document.querySelectorAll(".arrow");
  for (let arrow of arrows) {
    arrow.addEventListener("click", (event) => {
      handleArrowClick(event.target.id);
    });
  }
}

/**
 * Function that create the dot based on the number of slides
 * Add a specific class for the first one
 */
function dynamicDotCreation() {
  const dotContainer = document.querySelector(".dots");

  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("span");
    dot.classList.add("dot");

    if (i === 0) {
      //Add the selected class for the first one
      dot.classList.add("dot_selected");
    }

    dotContainer.appendChild(dot);
  }
}

/**
 * Function that call of the necessary functions to operate the carousel
 * @param {String} arrowId : take the id of the clicked arrow to handle the direction of the carousel
 */
function handleArrowClick(arrowId) {
  updateSlideIndex(arrowId);
  updateSlideImage();
  updateDots();
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
      //Add the selected class if the index match
      dot.classList.add("dot_selected");
    } else {
      //Otherwise remove it, if it contains it
      if (dot.classList.contains("dot_selected")) {
        dot.classList.remove("dot_selected");
      }
    }
  });
}
