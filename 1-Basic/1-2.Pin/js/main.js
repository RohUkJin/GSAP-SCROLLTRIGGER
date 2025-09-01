const split = new SplitText('h3', {type: 'chars'});

const tl = gsap.timeline({})

tl
.from('.tiger', {duration: 3, scale: 0, ease: 'back(3)'})
.from(split.chars, {duration: 2, y: 60, opacity: 0, ease: 'back(3)', stagger: 0.5,})

ScrollTrigger.create({
    trigger: '.banner',
    start: 'top center',
    end: 'bottom center',
    pin: true,
    pinSpacing: false,
    animation: tl,
    scrub: 1,
    // markers: true,
})



