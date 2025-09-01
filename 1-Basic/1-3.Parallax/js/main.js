const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#hero',
        start: '0% 0%',
        end: '100% 0%',
        markers: true,
        scrub: true,
    }
});

gsap.utils.toArray('.parallax').forEach(layer => {
    const depth = layer.dataset.depth;
    const movementY = -(layer.offsetHeight * depth)

    tl.to(layer, {y: movementY, ease: 'none'}, 0)
})
