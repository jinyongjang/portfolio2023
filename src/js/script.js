gsap.to('.skillLeft', {
    scrollTrigger: {
        trigger: '.skillLeft',
        start: '-20.2% top',
        end: '=+200%',
        pin: true,
        scrub: true,
        markers: false,
    },
});

gsap.to('.movingText', {
    scrollTrigger: {
        trigger: '.movingText',
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: false,
    },
});

gsap.to('.skillRight', {
    scrollTrigger: {
        trigger: '.skillRight',
        start: 'top top',
        end: '+=245%',
        pin: false,
        scrub: true,
        markers: false,
    },
});

gsap.to('.movingText2', {
    scrollTrigger: {
        trigger: '.movingText2',
        start: 'top top',
        end: '+=300%',
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: false,
    },
});
