// /* =========================================================
//    SHAHZAD BUILDERS & DEVELOPERS
//    HOME PAGE JAVASCRIPT
// ========================================================= */

// document.addEventListener("DOMContentLoaded", () => {

//     /* =====================================================
//        1. NAVBAR SCROLL EFFECT
//     ===================================================== */

//     const navbar = document.querySelector(".site-navbar");

//     if (navbar) {
//         window.addEventListener("scroll", () => {

//             if (window.scrollY > 40) {
//                 navbar.classList.add("navbar-scrolled");
//             } else {
//                 navbar.classList.remove("navbar-scrolled");
//             }

//         });
//     }


//     /* =====================================================
//        2. REVEAL ANIMATION
//     ===================================================== */

//     const revealElements = document.querySelectorAll(
//         ".home-reveal, .leader-card, .bank-card, .project-preview, .strength-card, .home-commitment-card"
//     );

//     if ("IntersectionObserver" in window) {

//         const observer = new IntersectionObserver(
//             (entries, observer) => {

//                 entries.forEach((entry) => {

//                     if (entry.isIntersecting) {

//                         entry.target.classList.add("show");

//                         observer.unobserve(entry.target);

//                     }

//                 });

//             },
//             {
//                 threshold: 0.12
//             }
//         );

//         revealElements.forEach((element) => {
//             observer.observe(element);
//         });

//     } else {

//         revealElements.forEach((element) => {
//             element.classList.add("show");
//         });

//     }


//     /* =====================================================
//        3. LEADERSHIP CARD HOVER
//     ===================================================== */

//     const leaderCards = document.querySelectorAll(".leader-card");

//     leaderCards.forEach((card) => {

//         card.addEventListener("mouseenter", () => {
//             card.classList.add("leader-active");
//         });

//         card.addEventListener("mouseleave", () => {
//             card.classList.remove("leader-active");
//         });

//     });


//     /* =====================================================
//        4. BANK CARD HOVER
//     ===================================================== */

//     const bankCards = document.querySelectorAll(".bank-card");

//     bankCards.forEach((card) => {

//         card.addEventListener("mouseenter", () => {
//             card.classList.add("bank-active");
//         });

//         card.addEventListener("mouseleave", () => {
//             card.classList.remove("bank-active");
//         });

//     });


//     /* =====================================================
//        5. GOLDEN CURSOR
//     ===================================================== */

//     const cursor = document.createElement("div");
//     const cursorDot = document.createElement("div");

//     cursor.className = "custom-cursor";
//     cursorDot.className = "custom-cursor-dot";

//     document.body.appendChild(cursor);
//     document.body.appendChild(cursorDot);

//     let mouseX = 0;
//     let mouseY = 0;

//     let cursorX = 0;
//     let cursorY = 0;

//     document.addEventListener("mousemove", (event) => {

//         mouseX = event.clientX;
//         mouseY = event.clientY;

//         cursorDot.style.left = `${mouseX}px`;
//         cursorDot.style.top = `${mouseY}px`;

//     });


//     function animateCursor() {

//         cursorX += (mouseX - cursorX) * 0.15;
//         cursorY += (mouseY - cursorY) * 0.15;

//         cursor.style.left = `${cursorX}px`;
//         cursor.style.top = `${cursorY}px`;

//         requestAnimationFrame(animateCursor);
//     }

//     animateCursor();


//     /* =====================================================
//        6. CURSOR HOVER EFFECT
//     ===================================================== */

//     const interactiveElements = document.querySelectorAll(
//         "a, button, .leader-card, .bank-card, .project-preview, .strength-card"
//     );

//     interactiveElements.forEach((element) => {

//         element.addEventListener("mouseenter", () => {
//             cursor.classList.add("cursor-hover");
//             cursorDot.classList.add("cursor-dot-hover");
//         });

//         element.addEventListener("mouseleave", () => {
//             cursor.classList.remove("cursor-hover");
//             cursorDot.classList.remove("cursor-dot-hover");
//         });

//     });


//     /* =====================================================
//        7. SMOOTH NAVIGATION
//     ===================================================== */

//     const anchorLinks = document.querySelectorAll(
//         'a[href^="#"]'
//     );

//     anchorLinks.forEach((link) => {

//         link.addEventListener("click", (event) => {

//             const targetId = link.getAttribute("href");

//             if (
//                 !targetId ||
//                 targetId === "#" ||
//                 targetId.length <= 1
//             ) {
//                 return;
//             }

//             const target = document.querySelector(targetId);

//             if (target) {

//                 event.preventDefault();

//                 target.scrollIntoView({
//                     behavior: "smooth",
//                     block: "start"
//                 });

//             }

//         });

//     });


//     /* =====================================================
//        8. PROJECT CARD TILT EFFECT
//     ===================================================== */

//     const projectCards = document.querySelectorAll(
//         ".project-preview"
//     );

//     projectCards.forEach((card) => {

//         card.addEventListener("mousemove", (event) => {

//             const rect = card.getBoundingClientRect();

//             const x = event.clientX - rect.left;
//             const y = event.clientY - rect.top;

//             const centerX = rect.width / 2;
//             const centerY = rect.height / 2;

//             const rotateX =
//                 ((y - centerY) / centerY) * -2;

//             const rotateY =
//                 ((x - centerX) / centerX) * 2;

//             card.style.transform =
//                 `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

//         });

//         card.addEventListener("mouseleave", () => {

//             card.style.transform =
//                 "perspective(900px) rotateX(0deg) rotateY(0deg)";

//         });

//     });


//     /* =====================================================
//        9. BANK LOGO FLOATING ANIMATION
//     ===================================================== */

//     bankCards.forEach((card, index) => {

//         card.style.animationDelay =
//             `${index * 0.12}s`;

//     });


//     /* =====================================================
//        10. ACTIVE NAV LINK
//     ===================================================== */

//     const currentPage =
//         window.location.pathname.split("/").pop();

//     const navLinks =
//         document.querySelectorAll(".nav-link");

//     navLinks.forEach((link) => {

//         const href =
//             link.getAttribute("href");

//         if (
//             currentPage === "index.html" &&
//             href === "#"
//         ) {
//             link.classList.add("active");
//         }

//     });


//     /* =====================================================
//        11. MOBILE NAVBAR CLOSE
//     ===================================================== */

//     const mobileNavLinks =
//         document.querySelectorAll(
//             ".navbar-collapse .nav-link"
//         );

//     const navbarCollapse =
//         document.querySelector(".navbar-collapse");

//     mobileNavLinks.forEach((link) => {

//         link.addEventListener("click", () => {

//             if (
//                 window.innerWidth < 992 &&
//                 navbarCollapse &&
//                 navbarCollapse.classList.contains("show")
//             ) {

//                 const bsCollapse =
//                     bootstrap.Collapse.getInstance(
//                         navbarCollapse
//                     );

//                 if (bsCollapse) {
//                     bsCollapse.hide();
//                 }

//             }

//         });

//     });


//     /* =====================================================
//        12. HERO IMAGE PARALLAX
//     ===================================================== */

//     const heroImage =
//         document.querySelector(".hero-image img");

//     if (heroImage) {

//         window.addEventListener("scroll", () => {

//             if (window.innerWidth > 991) {

//                 const scrollValue =
//                     window.scrollY * 0.08;

//                 heroImage.style.transform =
//                     `translateY(${scrollValue}px) scale(1.02)`;

//             }

//         });

//     }


//     console.log(
//         "Shahzad Builders & Developers Home loaded successfully."
//     );

// });

