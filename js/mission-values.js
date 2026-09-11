/* =========================================================
   CEO VISION SLIDER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".cv-slider");

    if (!slider) return;

    const slides = slider.querySelectorAll(".cv-slide");
    const progressItems = slider.querySelectorAll(".cv-progress-line");

    const prevButton = slider.querySelector(".cv-prev");
    const nextButton = slider.querySelector(".cv-next");

    let currentSlide = 0;
    let autoPlay;


    /* =========================
       SHOW SLIDE
    ========================= */

    function showSlide(index) {

        if (index < 0) {
            index = slides.length - 1;
        }

        if (index >= slides.length) {
            index = 0;
        }

        currentSlide = index;


        /* slides */

        slides.forEach(function (slide, i) {

            slide.classList.toggle(
                "active",
                i === currentSlide
            );

        });


        /* progress */

        progressItems.forEach(function (item, i) {

            item.classList.toggle(
                "active",
                i === currentSlide
            );

        });

    }


    /* =========================
       NEXT
    ========================= */

    function nextSlide() {

        showSlide(currentSlide + 1);

    }


    /* =========================
       PREVIOUS
    ========================= */

    function previousSlide() {

        showSlide(currentSlide - 1);

    }


    /* =========================
       BUTTONS
    ========================= */

    nextButton.addEventListener("click", function () {

        nextSlide();

        restartAutoPlay();

    });


    prevButton.addEventListener("click", function () {

        previousSlide();

        restartAutoPlay();

    });


    /* =========================
       AUTO PLAY
    ========================= */

    function startAutoPlay() {

        autoPlay = setInterval(function () {

            nextSlide();

        }, 5500);

    }


    function restartAutoPlay() {

        clearInterval(autoPlay);

        startAutoPlay();

    }


    /* =========================
       PAUSE ON HOVER
    ========================= */

    slider.addEventListener("mouseenter", function () {

        clearInterval(autoPlay);

    });


    slider.addEventListener("mouseleave", function () {

        startAutoPlay();

    });


    /* =========================
       KEYBOARD CONTROLS
    ========================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "ArrowRight") {

            nextSlide();

            restartAutoPlay();

        }

        if (event.key === "ArrowLeft") {

            previousSlide();

            restartAutoPlay();

        }

    });


    /* =========================
       INITIALIZE
    ========================= */

    showSlide(0);

    startAutoPlay();

});