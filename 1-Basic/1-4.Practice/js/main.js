// fit-content 혹은 flex를 통해 자식이 부모 넓이 통제 회피 가능
// 근데 scrollWidth를 써도 문제 없음

const showDemo = () => {
    gsap.to('.loader', { autoAlpha: 0 });
    document.body.style.overflow = 'auto';
    document.scrollingElement.scrollTo(0,0);

    gsap.utils.toArray('section').forEach((section, idx) => {
        const wrapper = section.querySelector('.wrapper');

        if (wrapper) {
            const [x, xEnd] = idx % 2 ? ['100%', -(wrapper.scrollWidth - innerWidth)] : [-(wrapper.scrollWidth), '0%']

            gsap.fromTo(wrapper, {
                x
            }, {
                x: xEnd,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    // markers: true,
                }
            })
        }
    })
}

const awesome = () => {
    const awesomeTl = gsap.timeline({
            defaults: {
                ease: 'none',
            }
        })
        .from('.awsome .text', {
            x: innerWidth,
        })
        .to('.awsome .text', {
            scale: 50,
        })
        .to('body', {
            backgroundColor: 'black',
        }, '-=0.5')

    ScrollTrigger.create({
        trigger: '.awsome',
        start: '0% 0%',
        end: '+=3000',
        animation: awesomeTl,
        pin: true,
        scrub: 1,
        // markers: true,
    })
}

const tryNow = () => {
    ScrollTrigger.create({
        trigger: '.try',
        start: 'top top',
        end: '+=2000',
        animation: gsap.from('.try .text', {
            y: 50,
            opacity: 0
        }),
        pin: true,
        scrub: true,
    })
}

function init() {
    showDemo();
    awesome();
    tryNow();
}

const img = gsap.utils.toArray('img');
const loader = document.querySelector('.loader--text');

const updateProgress = (instance) => {
    loader.textContent = `${Math.round(instance.progressedCount * 100 / img.length)}%`;
}

imagesLoaded(img)
.on('progress', updateProgress)
.on('always', init);