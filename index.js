document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("userEmail").value.trim();
    const pass = document.getElementById("userPass").value.trim();
    const statusDiv = document.getElementById("formStatus");

    if (email && pass) {
      statusDiv.textContent = "Регистрация прошла успешно!";
      statusDiv.style.color = "#2ecc71";
    } else {
      statusDiv.textContent = "Пожалуйста, заполните все поля.";
      statusDiv.style.color = "#e74c3c";
    }
  });

const slider = document.getElementById("imageSlider");
const slides = slider.querySelectorAll("img");
let currentSlide = 0;

function initSlider() {
  slides.forEach((slide, index) => {
    if (index !== 0) {
      slide.style.display = 'none';
    }
  });
}

initSlider();

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

document.getElementById("prevSlide").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});
document.getElementById("nextSlide").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  } else if (event.key === "ArrowRight") {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
});

const promoModal = document.getElementById("promoModal");
document.getElementById("showPromo").addEventListener("click", () => {
  promoModal.style.display = "block";
});
document.getElementById("closePromo").addEventListener("click", () => {
  promoModal.style.display = "none";
});
