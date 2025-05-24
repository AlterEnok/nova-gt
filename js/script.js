const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});


gsap.registerPlugin(ScrollTrigger);

// Анимация текста NovaTeam
gsap.to(".title", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: -400,
    scale: 1.5,
    opacity: 0
});

// Зум и затухание первого фона
gsap.to(".bg", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    scale: 1.2,
    opacity: 0
});

// Вторая секция
// Показываем .bg2
gsap.to(".bg2", {
    scrollTrigger: {
        trigger: ".transition-1",
        start: "top bottom",
        end: "top top",
        scrub: true
    },
    scale: 1,
    opacity: 0.3
});

// Прячем .bg2, когда появляется третья секция
gsap.to(".bg2", {
    scrollTrigger: {
        trigger: ".transition-2",
        start: "top bottom",
        end: "top top",
        scrub: true
    },
    scale: 1.2,
    opacity: 0
});

gsap.to(".subtitle", {
    scrollTrigger: {
        trigger: ".transition-1",
        start: "top center",
        end: "center center",
        scrub: true
    },
    opacity: 1,
    y: -100
});

// Прячем .subtitle при переходе к третьей секции
gsap.to(".subtitle", {
    scrollTrigger: {
        trigger: ".transition-2",
        start: "top bottom",
        end: "top top",
        scrub: true
    },
    opacity: 0,
    y: -200
});

// Третья секция
gsap.to(".bg3", {
    scrollTrigger: {
        trigger: ".transition-2",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    },
    scale: 1,
    opacity: 0.3
});

gsap.to(".subtitle-2", {
    scrollTrigger: {
        trigger: ".transition-2",
        start: "top center",
        end: "center center",
        scrub: true
    },
    opacity: 1,
    y: -100
});
