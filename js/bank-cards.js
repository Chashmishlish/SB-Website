/* =====================================================
   BANK CARDS ANIMATIONS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".bank-card");

    if (!cards.length) return;


    /* =================================================
       SCROLL REVEAL
    ================================================= */

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(50px) scale(0.96)";
        card.style.transition = `
            opacity 0.7s ease,
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.4s ease,
            box-shadow 0.4s ease
        `;

        card.style.transitionDelay = `${index * 100}ms`;

    });


    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0) scale(1)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    cards.forEach(card => {
        observer.observe(card);
    });



    /* =================================================
       3D HOVER TILT
    ================================================= */

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -3;

            const rotateY =
                ((x - centerX) / centerX) * 3;

            card.style.transform = `
                translateY(-12px)
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
            `;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0) scale(1) rotateX(0) rotateY(0)";

        });

    });



    /* =================================================
       IMAGE MOVEMENT
    ================================================= */

    cards.forEach(card => {

        const image = card.querySelector(".bank-image img");

        if (!image) return;

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x =
                (e.clientX - rect.left) / rect.width - 0.5;

            const y =
                (e.clientY - rect.top) / rect.height - 0.5;

            image.style.transform = `
                scale(1.08)
                translate(${x * 8}px, ${y * 8}px)
            `;

        });


        card.addEventListener("mouseleave", () => {

            image.style.transform =
                "scale(1) translate(0, 0)";

        });

    });

});