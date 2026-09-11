document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".site-navbar");

    if (navbar) {
        navbar.querySelectorAll(".nav-btn").forEach((button) => {
            button.closest(".nav-item")?.remove();
        });

        const updateNavbar = () => {
            navbar.classList.toggle("navbar-scrolled", window.scrollY > 28);
        };

        updateNavbar();
        window.addEventListener("scroll", updateNavbar, { passive: true });
    }

    const revealItems = document.querySelectorAll(
        ".home-mission, .home-leadership, .home-strengths, .home-projects, .home-banks, .home-cta, " +
        ".mission-copy, .mission-bars, .leader-tile, .strength-card, .project-preview, .project-card, .bank-flip-card, " +
        ".strength-image, " +
        ".company-notebook, .ceo-notebook, .leader-profile-card"
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reducedMotion && "IntersectionObserver" in window) {
        revealItems.forEach((item, index) => {
            item.classList.add("scroll-reveal");
            item.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 90}ms`);
        });

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.14, rootMargin: "0px 0px -45px" });

        revealItems.forEach((item) => revealObserver.observe(item));
    }

    const notebook = document.querySelector("[data-notebook]");
    const notebookPages = notebook ? [...notebook.querySelectorAll(".notebook-page")] : [];
    const previousPageButton = notebook?.querySelector("[data-notebook-prev]");
    const nextPageButton = notebook?.querySelector("[data-notebook-next]");

    if (notebookPages.length && previousPageButton && nextPageButton) {
        let currentPage = 0;

        const updateNotebook = (nextIndex) => {
            currentPage = nextIndex;
            notebookPages.forEach((page, index) => {
                page.classList.toggle("is-current", index === currentPage);
            });
        };

        previousPageButton.addEventListener("click", () => {
            const previousPage = (currentPage - 1 + notebookPages.length) % notebookPages.length;
            updateNotebook(previousPage);
        });

        nextPageButton.addEventListener("click", () => {
            const nextPage = (currentPage + 1) % notebookPages.length;
            updateNotebook(nextPage);
        });

        notebook.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") previousPageButton.click();
            if (event.key === "ArrowRight") nextPageButton.click();
        });

        updateNotebook(currentPage);
    }

    const leaderCards = [...document.querySelectorAll(".leader-profile-card[data-profile]")];

    leaderCards.forEach((card) => {
        const profileLink = document.createElement("a");
        const profileLabel = card.querySelector(".leader-view");

        profileLink.href = card.dataset.profile;
        profileLink.className = "leader-view";
        profileLink.textContent = "View Profile ->";
        profileLabel?.replaceWith(profileLink);

        const selectLeader = () => {
            leaderCards.forEach((leaderCard) => {
                const isSelected = leaderCard === card;
                leaderCard.classList.toggle("is-selected", isSelected);
                leaderCard.setAttribute("aria-expanded", String(isSelected));
            });
        };

        card.addEventListener("click", (event) => {
            if (event.target.closest("a")) return;
            selectLeader();
        });

        card.addEventListener("keydown", (event) => {
            if (event.key !== "Enter" && event.key !== " ") return;
            event.preventDefault();
            selectLeader();
        });
    });

    document.querySelectorAll(".commitment-card").forEach((card) => {
        if (card.querySelector(".flip-card-inner")) return;

        const number = card.querySelector(".commitment-number");
        const heading = card.querySelector("h3");
        const description = card.querySelector("p");
        const inner = document.createElement("div");
        const front = document.createElement("div");
        const back = document.createElement("div");

        inner.className = "flip-card-inner";
        front.className = "flip-card-front";
        back.className = "flip-card-back";
        front.append(number, heading);
        back.append(number.cloneNode(true), heading.cloneNode(true), description);
        inner.append(front, back);
        card.replaceChildren(inner);
        card.classList.add("flip-card");

        card.addEventListener("click", () => card.classList.toggle("is-flipped"));
        card.addEventListener("keydown", (event) => {
            if (event.key !== "Enter" && event.key !== " ") return;
            event.preventDefault();
            card.classList.toggle("is-flipped");
        });
        card.tabIndex = 0;
        card.setAttribute("role", "button");
    });

    const orbitWords = document.querySelectorAll(".orbit-word");

    if (orbitWords.length > 1) {
        let activeIndex = 0;
        orbitWords[activeIndex].classList.add("is-active");

        window.setInterval(() => {
            orbitWords[activeIndex].classList.remove("is-active");
            activeIndex = (activeIndex + 1) % orbitWords.length;
            orbitWords[activeIndex].classList.add("is-active");
        }, 3000);
    }

    const heroImage = document.querySelector(".hero-image");
    const heroPhoto = heroImage?.querySelector("img");
    const dots = [...document.querySelectorAll(".hero-slider-dots span")];
    const images = heroImage?.dataset.heroImages?.split(",").map((src) => src.trim()) || [];

    if (!heroPhoto || images.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    images.slice(1).forEach((src) => {
        const preload = new Image();
        preload.src = src;
    });

    let currentIndex = 0;
    window.setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        heroPhoto.classList.add("is-changing");

        window.setTimeout(() => {
            heroPhoto.src = images[currentIndex];
            heroPhoto.alt = "Shahzad Builders residential development";
            dots.forEach((dot, index) => dot.classList.toggle("is-active", index === currentIndex));
            heroPhoto.classList.remove("is-changing");
        }, 350);
    }, 5000);
});


//tabs linking (project)

document.addEventListener("DOMContentLoaded", function () {

    const hash = window.location.hash;

    if (!hash) return;

    const tabButton = document.querySelector(
        '[data-bs-target="' + hash + '"]'
    );

    if (!tabButton) return;

    const tab = new bootstrap.Tab(tabButton);

    tab.show();

    setTimeout(function () {
        const target = document.querySelector(hash);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }, 200);

});


// contact form submission
const scriptURL = "https://script.google.com/macros/s/AKfycbx2NCnsSIVDlZITZqUAhiF6Ft9qfNV3KHm9Z6TaHo4UYsj1YuB6aOzjwfU3MhqAuHiP/exec";

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const button = contactForm.querySelector(".contact-submit");

        button.disabled = true;
        button.textContent = "Sending...";

        formMessage.textContent = "";
        formMessage.className = "form-message";

        const data = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            subject: document.getElementById("subject").value.trim(),
            message: document.getElementById("message").value.trim()
        };

        try {

            const response = await fetch(scriptURL, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            console.log("Google Apps Script response:", result);

            if (result.success) {

                formMessage.textContent =
                    "Thank you! Your message has been sent successfully.";

                formMessage.classList.add("success");

                contactForm.reset();

            } else {

                throw new Error(result.message);

            }

        } catch (error) {

            console.error("Submission error:", error);

            formMessage.textContent =
                "Unable to send your message. Please try again.";

            formMessage.classList.add("error");

        }

        button.disabled = false;
        button.textContent = "Send Message";

    });

}