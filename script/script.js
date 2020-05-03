const headerNav = document.querySelector(".navigator");

const lastBg = document.querySelector(".sixth a");

window.addEventListener("scroll", function(e) {
  const scrollLocation = e.currentTarget.scrollY;
  if (scrollLocation >= 99) {
    headerNav.classList.add("white-bg");
    lastBg.classList.add("last-color");
  } else {
    headerNav.classList.remove("white-bg");
    lastBg.classList.remove("last-color");
  }
});

////////////////////////////////////word slide////////////////////////////////////////////

const slides = document.querySelector(".slides-word");

var counter = 0;

var width = [0, 100];
setInterval(() => {
  var minus = counter++;
  if (minus === 1) {
    counter = 0;
  }
  var transit = width[minus];

  slides.setAttribute("style", `--x: ${-transit}%`);
}, 2000);

////////////siding pages/////////////////////

const slider = document.querySelector(".slider");
const slideDown = document.querySelector(".slide-down");

const buttons = [
  document.querySelector(".home"),
  document.querySelector(".about"),
  document.querySelector(".service"),
  document.querySelector(".portfolio"),
  document.querySelector(".clients"),
  document.querySelector(".contact")
];

buttons[0].addEventListener("click", function(e) {
  headerNav.classList.remove("white-bg");
  menuButton();
});

buttons[1].addEventListener("click", function(e) {
  headerNav.classList.add("white-bg");
  menuButton();
});

buttons[2].addEventListener("click", function(e) {
  headerNav.classList.add("white-bg");
  menuButton();
});

buttons[3].addEventListener("click", function(e) {
  headerNav.classList.add("white-bg");
  menuButton();
});

buttons[4].addEventListener("click", function(e) {
  headerNav.classList.add("white-bg");
  menuButton();
});

buttons[5].addEventListener("click", function(e) {
  headerNav.classList.add("white-bg");
  menuButton();
});


////////////setting border bottom on scrolll

const buttonContainer = [
  document.querySelector(".fst"),
  document.querySelector(".snd"),
  document.querySelector(".third"),
  document.querySelector(".forth"),
  document.querySelector(".fifth"),
  document.querySelector(".sixth")
];
buttonContainer[0].classList.add("underline");
window.addEventListener("scroll", function(e) {
  const scrollLocation = e.currentTarget.scrollY;

  if (scrollLocation < 590) {
    buttonContainer[0].classList.add("underline");
    buttonContainer[1].classList.remove("underline");
    buttonContainer[2].classList.remove("underline");
    buttonContainer[3].classList.remove("underline");
    buttonContainer[4].classList.remove("underline");
    buttonContainer[5].classList.remove("special-contact");
  }

  if (scrollLocation >= 600) {
    buttonContainer[0].classList.remove("underline");
    buttonContainer[1].classList.add("underline");
    buttonContainer[2].classList.remove("underline");
    buttonContainer[3].classList.remove("underline");
    buttonContainer[4].classList.remove("underline");
    buttonContainer[5].classList.remove("special-contact");
  }

  if (scrollLocation >= 1300) {
    buttonContainer[0].classList.remove("underline");
    buttonContainer[1].classList.remove("underline");
    buttonContainer[2].classList.add("underline");
    buttonContainer[3].classList.remove("underline");
    buttonContainer[4].classList.remove("underline");
    buttonContainer[5].classList.remove("special-contact");
  }

  if (scrollLocation >= 1900) {
    buttonContainer[0].classList.remove("underline");
    buttonContainer[1].classList.remove("underline");
    buttonContainer[2].classList.remove("underline");
    buttonContainer[3].classList.add("underline");
    buttonContainer[4].classList.remove("underline");
    buttonContainer[5].classList.remove("special-contact");
  }

  console.log(scrollLocation);
  if (scrollLocation >= 2500) {
    buttonContainer[0].classList.remove("underline");
    buttonContainer[1].classList.remove("underline");
    buttonContainer[2].classList.remove("underline");
    buttonContainer[3].classList.remove("underline");
    buttonContainer[4].classList.add("underline");
    buttonContainer[5].classList.remove("special-contact");
  }

  if (scrollLocation >= 3100) {
    buttonContainer[0].classList.remove("underline");
    buttonContainer[1].classList.remove("underline");
    buttonContainer[2].classList.remove("underline");
    buttonContainer[3].classList.remove("underline");
    buttonContainer[4].classList.remove("underline");
    buttonContainer[5].classList.add("special-contact");
  }
});

//////removing all classes on clicking the buttons

/*
buttons.forEach(function (e) {
   e.addEventListener('click',function (e) {
    buttonContainer[0].classList.remove('underline')
    buttonContainer[1].classList.remove('underline')
    buttonContainer[2].classList.remove('underline')
    buttonContainer[3].classList.remove('underline')
    buttonContainer[4].classList.remove('underline')
    buttonContainer[5].classList.remove('special-contact')
   })
})

*/

//////sliding images for portifolios

function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error("No slider passed in");
  }
  // create some variables for working iwth the slider
  let prev;
  let current;
  let next;
  // select the elements needed for the slider
  const slides = slider.querySelector(".slides-tab");
  const prevButton = document.querySelector(".goToPrev");
  const nextButton = document.querySelector(".goToNext");

  console.log(prevButton, nextButton);
  function startSlider() {
    current = slider.querySelector(".current") || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }

  function applyClasses() {
    current.classList.add("current");
    prev.classList.add("prev");
    next.classList.add("next");
  }

  function mover(direction) {
    // first strip all the classes off the current slides
    const classesToRemove = ["prev", "current", "next"];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if (direction === "back") {
      // make an new array of the new values, and destructure them over and into the prev, current and next variables
      [prev, current, next] = [
        // get the prev slide, if there is none, get the last slide from the entire slider for wrapping
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        // get the next slide, or if it's at the end, loop around and grab the first slide
        next.nextElementSibling || slides.firstElementChild
      ];
    }

    applyClasses();
  }

  // when this slider is created, run the start slider function
  startSlider();
  applyClasses();

  // Event listeners
  prevButton.addEventListener("click", () => mover("back"));
  nextButton.addEventListener("click", mover);
}

const mySlider = Slider(document.querySelector(".tab-sliding-img"));

/////////////////sliding clients ///////////

function client(slider) {
  if (!(slider instanceof Element)) {
    throw new Error("No slider passed in");
  }
  // create some variables for working iwth the slider
  let prev;
  let current;
  let next;
  // select the elements needed for the slider
  const slides = slider.querySelector(".slides-client");

  function startSlider() {
    current = slider.querySelector(".current") || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.log({ current, prev, next });
  }

  function applyClasses() {
    current.classList.add("current");
    prev.classList.add("prev");
    next.classList.add("next");
  }

  function move(direction) {
    // first strip all the classes off the current slides
    const classesToRemove = ["prev", "current", "next"];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if (direction === "back") {
      // make an new array of the new values, and destructure them over and into the prev, current and next variables
      [prev, current, next] = [
        // get the prev slide, if there is none, get the last slide from the entire slider for wrapping
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        // get the next slide, or if it's at the end, loop around and grab the first slide
        next.nextElementSibling || slides.firstElementChild
      ];
    }

    applyClasses();
  }

  // when this slider is created, run the start slider function
  startSlider();
  applyClasses();

  // Event listeners
  // nextButton.addEventListener('click', move);

  /////////stop moving
  setInterval(function() {
    move();
  }, 3000);
}

const ClientSlider = client(document.querySelector(".slider-client"));

////////////////////menu button js

const menu = document.querySelector(".menu");

const navigatorUp = document.querySelector(".navigator");
const title = document.querySelector(".title");
const navBtn = document.querySelector(".nav-btns");

function menuButton() {
  navigatorUp.classList.toggle("navigator-up");
  navBtn.classList.toggle("move-up");
  title.classList.toggle("bring-back-navBar");
}

menu.addEventListener("click", menuButton);
