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




  const images = ["./main/image1.webp", "./main/image2.webp",  "./main/image3.webp", "./main/image4.webp",]; // Replace with your actual image paths
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
