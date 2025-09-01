gsap.utils.toArray('.section').forEach((section, idx) => {

    const wrapper = section.querySelector('.wrapper');

    if(wrapper){
        let endPoint = idx % 2 ? ['0' , -(wrapper.offsetWidth - innerWidth)] : [-(wrapper.offsetWidth - innerWidth), 0];

        gsap.fromTo(wrapper, {
            x: endPoint[0]
        }, {
            x: endPoint[1],
            scrollTrigger: {
                trigger: section,
                start: '20% 50%',
                end: '80% 50%',
                scrub: 1,
                markers: true,
            }
        })
    }
})