document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        nav.classList.toggle("active");
        burger.classList.toggle("toggle");
    });
});



const faders = document.querySelectorAll('.fade-in');

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });




  const images = ["./main/image4.webp", "./main/image2.webp",  "./main/image3.webp", "./main/image1.webp",]; // Replace with your actual image paths
  let currentIndex = 0;

  const sliderImage = document.getElementById("sliderImage");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  function changeImage(newIndex) {
    sliderImage.classList.add("fade-out");
    
    setTimeout(() => {
      currentIndex = newIndex;
      sliderImage.src = images[currentIndex];
      sliderImage.classList.remove("fade-out");
    }, 300); // this controls how long the image fades out before the new one fades in
  }

  nextBtn.addEventListener("click", () => {
    const newIndex = (currentIndex + 1) % images.length;
    changeImage(newIndex);
  });

  prevBtn.addEventListener("click", () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(newIndex);
  });




  let second = 0;
let minute = 0;
let hour = 0;
let day = 0;

function updateTime() {
  second++;

  if (second === 60) {
    second = 0;
    minute++;
  }

  if (minute === 60) {
    minute = 0;
    hour++;
  }

  if (hour === 24) {
    hour = 0;
    day++;
  }

  // Update DOM
  document.getElementById("second").textContent = String(second).padStart(2, "0");
  document.getElementById("minute").textContent = String(minute).padStart(2, "0");
  document.getElementById("hour").textContent = String(hour).padStart(2, "0");
  document.getElementById("day").textContent = String(day).padStart(2, "0");
}

// Run every second
setInterval(updateTime, 1000);



const buttons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    contents.forEach(content => content.classList.remove('active'));
    const target = button.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
  });
});

// Show the first content by default
document.getElementById('content1').classList.add('active');

