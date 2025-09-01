// fit-content 혹은 flex를 통해 자식이 부모 넓이 통제 회피 가능
// 근데 scrollWidth를 써도 문제 없음

gsap.utils.toArray('section').forEach((section, idx) => {
    const wrapper = section.querySelector('.wrapper');

    if(wrapper){
        const [x, xEnd] = idx % 2 ? ['100%', -(wrapper.scrollWidth - innerWidth)] : [-(wrapper.scrollWidth), '0%']
     
        gsap.fromTo(wrapper, { x }, {
            x: xEnd,
            scrollTrigger: {
                trigger: section,   
                scrub: true,
                // markers: true,
            }
         })
    }
})