import gsap from 'gsap';

class MarqueeAnimation {
    constructor() {
        document.addEventListener("DOMContentLoaded", this.animateMarquee());
    }

    animateMarquee() {
        const marquee = document.querySelector('[wb-data="marquee"]');
        if (!marquee) {
            return;
        }
        const duration = parseInt(marquee.getAttribute("duration"), 10) || 5;
        console.log(duration);
        const marqueeContent = document.querySelector(".marquee-content");
        if (!marqueeContent) {
            return;
        }

        const marqueeContentClone = marqueeContent.cloneNode(true);
        marquee.append(marqueeContentClone);

        let tween;

        let progress = tween ? tween.progress() : 0;
        tween && tween.progress(0).kill();
        const width = parseInt(
            getComputedStyle(marqueeContent).getPropertyValue("width"),
            10
        );

        const gap = parseInt(
            getComputedStyle(marqueeContent).getPropertyValue("column-gap"),
            10
        );

        const distanceToTranslate = -1 * (gap + width);

        tween = gsap.fromTo(
            marquee.children,
            { x: 0 },
            { x: distanceToTranslate, duration, ease: "none", repeat: -1 }
        );
        tween.progress(progress);


    }
}

