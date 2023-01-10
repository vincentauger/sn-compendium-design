// register scrollTrigger
gsap.registerPlugin(ScrollTrigger);

// is user agent safari?
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if(isSafari) {
    ScrollTrigger.normalizeScroll(true);
}

ScrollTrigger.create({
    trigger: "#vt-intro-head",
    start: "top top",
    pin: true,
    pinSpacing: false,
})

gsap.to(".vt-intro-background",
    {
        scrollTrigger: {
            trigger: "#vt-intro-head",
            start: "top top",
            end: "top+=100% top",
            scrub: true,
            markers: false
        },
        y: () => "75vh",
        ease: "none",
    });

gsap.to(".vit-intro-background",
{
    scrollTrigger: {
        trigger: "#vt-intro-head",
        start: "top top",
        end: "top+=100% top",
        scrub: true,
        markers: false,
    },
    y: () => "50vh",
    ease: "none",
});

gsap.to(".vit-intro-title",
{
    scrollTrigger: {
        trigger: "#vt-intro-head",
        start: "top top",
        end: "top+=100% top",
        scrub: true,
        markers: false
    },
    y: () => "50vh",
    ease: "none",
});


gsap.to(".down-arrow",{
    scrollTrigger: {
        trigger: "#vt-intro-head",
        start: "-50px top",
        toggleActions: "restart none none reverse",
    },
    opacity: 0,
});


// read more feature section

document.querySelectorAll(".vit-readmore-container").forEach((container) => {
    container.querySelectorAll(".vit-readmore-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            container.querySelector(".vit-readmore-text").classList.toggle("vit-readmore-text-show");
            //if the text is shown, hide the button with id more
            container.querySelectorAll(".vit-readmore-btn").forEach((btn) => {
                // if id is more, hide the button
                if (btn.id === "more") {
                    btn.classList.toggle("vit-readmore-btn-hide");
                }
            });
        });
    });
});
