import gsap from 'gsap';
import SplitTextJS from 'split-text-js';


class TextAnimations {

    constructor() {
        this.animateHeroText();
    }

    animateHeroText() {
        const tl1 = gsap.timeline({repeat: -1, repeatDelay: 0,});
        const tl2 = gsap.timeline({repeat: -1, repeatDelay: 0});
        const tl3 = gsap.timeline({repeat: -1, repeatDelay: 0});

        const titles1 = gsap.utils.toArray(".heroSpan1");
        const titles2 = gsap.utils.toArray(".heroSpan2");
        const dots = gsap.utils.toArray(".heroDot")

        titles1.forEach(title => {
            const splitTitle = new SplitTextJS(title);
            tl1
                .from(splitTitle.chars, {
                    opacity: 0,
                    y: 10,
                    rotateX: -90,
                    stagger: 0.02
                }, "<")
                .to(splitTitle.chars, {
                    opacity: 0,
                    y: -10,
                    rotateX: 90,
                    stagger: 0.02
                }, "+=4")
        });
        titles2.forEach(title => {
            const splitTitle = new SplitTextJS(title);
            tl2
                .from(splitTitle.chars, {
                    opacity: 0,
                    y: 10,
                    rotateX: -90,
                    stagger: 0.02
                }, "<")
                .to(splitTitle.chars, {
                    opacity: 0,
                    y: -10,
                    rotateX: 90,
                    stagger: 0.02
                }, "+=4")
        })
        dots.forEach(dot => {
            const splitDot = new SplitTextJS(dot);
            tl3
                .from(splitDot.chars, {
                    opacity: 0,
                    y: 10,
                    stagger: 0.02
                }, "<")
                .to(splitDot.chars, {
                    opacity: 0,
                    y: -10,
                    stagger: 0.02
                }, "+=4.3")
        })
    }
}

new TextAnimations();