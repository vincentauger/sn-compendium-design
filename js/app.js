// register scrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.to(
    ".background",
    {
        scrollTrigger: {
            scroller: ".wrapper",
            scrub: true,
        },
        y: -200,
        ease: "none",
    }
);

gsap.to(
    ".down-arrow",
    {
        scrollTrigger: {
            scroller: ".wrapper",
            toggleActions: "restart none none reverse",
        },
        opacity: 0,
        height: 0,
        duration: 1,
    }
);

gsap.to(
    ".round-top",
    {
    scrollTrigger: {
        scroller: ".wrapper",
        toggleActions: "restart none none reverse",
    },
    opacity: 1,
    duration: 5,
});

let tl = gsap.timeline({
    scrollTrigger: {
        scroller: ".wrapper",
        trigger: "#top",
        start: "top top",
        end: "top 40%",
        endTrigger: ".round-top",
        toggleActions: "restart none none reverse",
        scrub: true,
    }/assets/img4_large.jpeg
});

tl.to(".ellipse > *",{
    opacity: 0,
    duration: 0.2
}).
    to(
    ".ellipse",
    {
        //y: "85%",
        // get 85% of the current height of the window
        y: () => window.innerHeight * 0.50,
        duration: 1,
    })
    .to(".ellipse", {
        opacity: 0,
        duration: 0.1,
    });
