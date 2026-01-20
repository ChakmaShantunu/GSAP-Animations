
// const tl = gsap.timeline({ delay: 1 })
// tl.from("h1", {
//     opacity: 0,
//     duration: 1,
//     delay: 1,
//     x: 20,
//     stagger: 0.3
// });

// tl.to("#box1", {
//     x: 1000,
//     y: 500,
//     delay: 1,
//     rotate: 360,
//     duration: 2,
//     repeat: -1,
//     yoyo: true,
//     backgroundColor: "blue",
//     borderRadiun: "50%",
//     scale: 0.5
// });

// const tl = gsap.timeline({ repeat: -1, delay: 1 });

// tl.to(["#box1", "#box2"], { x: 300, duration: 1 })
//     .to(["#box1", "#box2"], { y: 200, duration: 1, borderRadius: "50%" }) // 0.5s gap
//     .to(["#box1", "#box2"], { x: 0, duration: 1, borderRadius: "0%" })
//     .to(["#box1", "#box2"], { y: 0, scale: 0.5, borderRadius: "50%", duration: 1 }); // overlap
const tl = gsap.timeline()
tl.from("h2", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5
});
tl.from("h4", {
    y: -30,
    opacity: 0,
    duration: 1,
    stagger: 0.3
});


// gsap.to("#box3", {
//     x: 300,
//     duration: 1.5,
//     delay: 5,
//     borderRadius: "50%",
//     scale: 0.5
// })

// gsap.to("#box1", {
//     x: 1200,
//     y: 500,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     yoyo: true,
//     repeat: -1,
//     ease: "power1.inOut",
//     backgroundColor: "blue",
//     borderRadius: "50%",
//     scale: 0.5
// });

// gsap.from("h1", {
//     opacity: 0,
//     duration: 1,
//     delay: 1,
//     x: 20,
//     stagger: 0.3
// });


