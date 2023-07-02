
let navList = document.getElementById('nav-list')
console.log(navList)

// Show menu links on burger click
document.getElementById('menu-btn').addEventListener('click', () => {
  navList.classList.add('active')
});

// Hide navbar on click function
document.getElementById('menu-close').addEventListener('click', () => {
  navList.classList.remove('active')
});


// Slider Code 

const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let direction = -1;
let animationSpeed = 10; // Adjust this value to control the animation speed

function slide() {
  const containerWidth = sliderContainer.offsetWidth;
  const slides = Array.from(sliderContainer.children);

  if (direction === -1) {
    sliderContainer.appendChild(slides[0]);
  } else {
    sliderContainer.insertBefore(slides[slides.length - 1], slides[0]);
  }

  sliderContainer.style.transform = `translateX(-${direction * containerWidth}px)`;
}

function startSlider() {
  setInterval(() => {
    slide();
  }, animationSpeed * 1000);
}

prevBtn.addEventListener('click', function () {
  direction = 1;
  slide();
});

nextBtn.addEventListener('click', function () {
  direction = -1;
  slide();
});
