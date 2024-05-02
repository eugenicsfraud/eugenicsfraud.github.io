document.addEventListener("DOMContentLoaded", function() {
    fetchCarouselData("../assets/knitting.json", "knitting-carousel");
    fetchCarouselData("../assets/mushroom.json", "mushrooms-carousel");
});

function fetchCarouselData(jsonFile, carouselId) {
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            createCarousel(data, carouselId);
        })
        .catch(error => console.error("Error fetching carousel data:", error));
}

function createCarousel(data, carouselId) {
    const carouselContainer = document.getElementById(carouselId);
    const description = carouselContainer.parentElement.querySelector(".description");

    carouselContainer.innerHTML = '';

    data.images.forEach(image => {
        const img = document.createElement("img");
        img.src = image;
        carouselContainer.appendChild(img);
    });

    description.textContent = data.description;
    carouselContainer.dataset.currentIndex = 0;
}

function prevImage(carouselId) {
    const carouselContainer = document.getElementById(`${carouselId}-carousel`);
    const images = carouselContainer.querySelectorAll("img");
    let currentIndex = parseInt(carouselContainer.dataset.currentIndex);

    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images.forEach((image, index) => {
        if (index === currentIndex) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });

    carouselContainer.dataset.currentIndex = currentIndex;
}

function nextImage(carouselId) {
    const carouselContainer = document.getElementById(`${carouselId}-carousel`);
    const images = carouselContainer.querySelectorAll("img");
    let currentIndex = parseInt(carouselContainer.dataset.currentIndex);

    currentIndex = (currentIndex + 1) % images.length;


    images.forEach((image, index) => {
        if (index === currentIndex) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });


    carouselContainer.dataset.currentIndex = currentIndex;
}
