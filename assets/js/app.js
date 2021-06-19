const tl = gsap.timeline({
    defaults: { ease: "power1.out" }
});

tl.to(".slider-2", { y: "-100%", duration: 1.5, delay: 0.5 });
