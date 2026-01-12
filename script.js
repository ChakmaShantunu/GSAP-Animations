
const tl = gsap.timeline({ delay: 1 })
tl.to("#box1", {
    x: 1000,
    duration: 2
});

tl.from("#box2", {
    x: 1000,
    duration: 2
});