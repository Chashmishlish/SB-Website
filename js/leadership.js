document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".leadership-slide");
    const infos = document.querySelectorAll(".leader-info");
    const currentSlide = document.getElementById("currentSlide");

    const prevButton = document.querySelector(".leadership-prev");
    const nextButton = document.querySelector(".leadership-next");

    let currentIndex = 0;
    let autoSlide;

    function showLeader(index) {

        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });

        infos.forEach((info, i) => {
            info.classList.toggle("active", i === index);
        });

        currentSlide.textContent =
            String(index + 1).padStart(2, "0");

        currentIndex = index;
    }


    function nextLeader() {

        currentIndex++;

        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        showLeader(currentIndex);
    }


    function previousLeader() {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }

        showLeader(currentIndex);
    }


    /* =========================
       AUTO SLIDESHOW
       5 SECONDS
       ========================= */

    function startAutoSlide() {
        clearInterval(autoSlide);

        autoSlide = setInterval(function () {
            nextLeader();
        }, 5000);
    }


    /* =========================
       MANUAL NAVIGATION
       ========================= */

    nextButton.addEventListener("click", function () {
        nextLeader();
        startAutoSlide();
    });

    prevButton.addEventListener("click", function () {
        previousLeader();
        startAutoSlide();
    });


    /* =========================
       KEYBOARD
       ========================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "ArrowRight") {
            nextLeader();
            startAutoSlide();
        }

        if (event.key === "ArrowLeft") {
            previousLeader();
            startAutoSlide();
        }

    });


    /* START */

    showLeader(0);
    startAutoSlide();

});