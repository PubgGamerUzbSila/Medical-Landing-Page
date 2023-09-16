// --- functions ---
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function classMod(el, mod) {
  return `${el.classList[0]}--${mod}`;
}

function addClassMod(el, mod) {
  const mainClass = classMod(el, mod);
  el.classList.add(mainClass);
}

function removeClassMod(el, mod) {
  const mainClass = classMod(el, mod);
  el.classList.remove(mainClass);
}

function rotateStack(parent) {
  const firstEl = parent.children[0];
  parent.appendChild(firstEl);
}

function unrotateStack(parent) {
  const length = parent.children.length;
  const lastEl = parent.children[length - 1];
  lastEl.style.zIndex = "1000";
  const firstEl = parent.children[0];
  parent.insertBefore(lastEl, firstEl);

  setTimeout(() => {
    lastEl.style.zIndex = null;
  }, 1);
}

function debounce(cb, ms) {
  let isCooldown = false;

  return function () {
    if (isCooldown) {
      return;
    }
    cb.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => (isCooldown = false), ms);
  };
}

// --- CODE ---

const slider = $(".x-card-slider");
const nextBtn = $(".next-button");
const prevBtn = $(".prev-button");

const sliderMod = (mod) => classMod(slider, mod);

nextBtn.addEventListener("click", () => {
  nextCard();
});

prevBtn.addEventListener("click", () => {
  prevCard();
});

function nextCard() {
  slider.classList.add(sliderMod("next"));
}

function prevCard() {
  slider.classList.add(sliderMod("prev"));
}

slider.addEventListener("click", () => {
  nextCard();
});

const deanimate = debounce(() => {
  if (slider.classList.contains(sliderMod("next"))) {
    rotateStack(slider);
    slider.classList.remove(sliderMod("next"));
  } else if (slider.classList.contains(sliderMod("prev"))) {
    unrotateStack(slider);
    slider.classList.remove(sliderMod("prev"));
  }
}, 1);

slider.addEventListener("animationend", () => {
  deanimate();
});
