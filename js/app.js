// register scrollTrigger
gsap.registerPlugin(ScrollTrigger);

// is user agent safari?
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if(isSafari) {
    ScrollTrigger.normalizeScroll(true);
}

ScrollTrigger.create({
    trigger: ".vt-head",
    start: "top top",
    pin: true,
    pinSpacing: false,
})

gsap.to(".vt-intro-background",
    {
        scrollTrigger: {
            trigger: ".vt-head",
            start: "top top",
            end: "top+=100% top",
            scrub: true,
            markers: false
        },
        y: "75vh",
        ease: "none",
    });

gsap.to(".down-arrow",{
    scrollTrigger: {
        trigger: ".vt-head",
        start: "-50px top",
        toggleActions: "restart none none reverse",
    },
    opacity: 0,
});

