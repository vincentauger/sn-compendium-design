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


// a function that calculate distance from absolute top of page to top of given middle of the given id
// function getOffsetTop(id) {
//     const el = document.getElementById(id);
//     const rect = el.getBoundingClientRect();
//     //console.log(rect.top);
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     let offset = rect.top + scrollTop;
//     return offset + rect.height / 2;
// }

// function alignHeroMask() {
//     heroImgOffset = getOffsetTop("vt-hero-img");
//     heroMaskOffset = getOffsetTop("vt-hero-mask");
//     //console.log(heroImgOffset, heroMaskOffset)
//     let offset = heroImgOffset - heroMaskOffset;
//     const heroMask = document.getElementById("vt-hero-mask");
//     heroMask.style.top = `${offset}px`;

// }

// alignHeroMask();

gsap.to(".vt-intro-background",
    {
        scrollTrigger: {
            trigger: ".vt-head",
            start: "top top",
            end: "top+=100% top",
            scrub: true,
            markers: false
        },
        // bring the top position back to 0
        y: () => window.innerWidth > 992 ? "75vh" : "90vh",
        ease: "none",
    });

gsap.to(".vt-intro-background",
    {
        scrollTrigger: {
            trigger: ".down-arrow",
            start: "top center",
            end: "bottom top",
            scrub: true,
            markers: false
        },
        marginBottom: "40rem",
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

