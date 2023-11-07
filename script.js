function openNav() {
  document.getElementById("mySidenav").style.width = "45vw"; // 25% of viewport width
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function toggleDropdown(id, event) {
  event.preventDefault();
  event.stopPropagation();
  var dropdownContent = document.getElementById(id);
  if (dropdownContent.parentElement.classList.contains("open")) {
    dropdownContent.parentElement.classList.remove("open");
  } else {
    dropdownContent.parentElement.classList.add("open");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  let newSlideIndex = 0; // Index for the new-img slideshow

  function showMainSlides() {
    let slides = document.querySelectorAll(".Main-img .slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showMainSlides, 3000);
  }

  // New function for the new-img slideshow
  function showNewSlides() {
    let newSlides = document.querySelectorAll(".new-img .slide");
    for (let i = 0; i < newSlides.length; i++) {
      newSlides[i].style.display = "none";
    }
    newSlideIndex++;
    if (newSlideIndex > newSlides.length) {
      newSlideIndex = 1;
    }
    newSlides[newSlideIndex - 1].style.display = "block";
    setTimeout(showNewSlides, 1500); // Change image every 1 second
  }

  showMainSlides(); // Initialize main slideshow
  showNewSlides(); // Initialize new-img slideshow

  // ... (rest of your code)
});
let searchButton = document.querySelector(".search-btn");
if (searchButton) {
  searchButton.addEventListener("click", function () {
    let searchTerm = document.querySelector(".search-bar").value.toLowerCase();
    let products = document.querySelectorAll(".product");

    if (products && searchTerm) {
      products.forEach((product) => {
        let category = product.getAttribute("data-category");
        let brand = product.getAttribute("data-brand");

        if (
          (category && category.toLowerCase().includes(searchTerm)) ||
          (brand && brand.toLowerCase().includes(searchTerm))
        ) {
          product.style.display = "";
        } else {
          product.style.display = "none";
        }
      });
    }
  });
}
let slideIndex = 0;
let slides = document.querySelectorAll(".slide");

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide, i) => {
    slide.style.display = i === slideIndex ? "block" : "none";
  });
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

// Initialize slideshow
showSlide(slideIndex);
// Function to open the modal
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

// Function to close the modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function closeAllDropdowns() {
  var dropdowns = document.querySelectorAll(".dropdown-content");
  dropdowns.forEach((dropdown) => {
    dropdown.parentElement.classList.remove("open");
  });
}

function toggleDropdown(id, event) {
  event.preventDefault();
  event.stopPropagation();

  closeAllDropdowns(); // Close all dropdowns when one is clicked

  var dropdownContent = document.getElementById(id);
  dropdownContent.parentElement.classList.add("open");
}

document.addEventListener("click", function (event) {
  var isClickInside = document
    .getElementById("mySidenav")
    .contains(event.target);

  if (!isClickInside) {
    closeAllDropdowns();
  }
});
