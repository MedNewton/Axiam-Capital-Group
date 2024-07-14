import gsap from 'gsap';
import SplitText from 'gsap-trial/SplitText';

gsap.registerPlugin(SplitText);

class TextAnimations {

    constructor() {
        this.animateHeroText()
        this.animateMenu()
    }

    animateHeroText() {
        const tl1 = gsap.timeline({repeat: -1, repeatDelay: 0,});
        const tl2 = gsap.timeline({repeat: -1, repeatDelay: 0});
        const tl3 = gsap.timeline({repeat: -1, repeatDelay: 0});

        const titles1 = gsap.utils.toArray(".heroSpan1");
        const titles2 = gsap.utils.toArray(".heroSpan2");
        const dots = gsap.utils.toArray(".heroDot")

        titles1.forEach(title => {
            const splitTitle = new SplitText(title);
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
            const splitTitle = new SplitText(title);
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
            const splitDot = new SplitText(dot);
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

    animateMenu(){
        const burgerBtn = document.querySelector("burgerBtn")
        const toggleMenuBtnLine1 = document.querySelector(".bar1")
        const toggleMenuBtnLine2 = document.querySelector(".bar2")
        const toggleMenuBtnLine3 = document.querySelector(".bar3")
        let isToggled = false;
        burgerBtn.addEventListener('click', function (){
            if(isToggled === false){
                isToggled = true;
                alert(isToggled)
                gsap.to(toggleMenuBtnLine2, {
                    duration: 0.2,
                    width: "0px",
                    ease: "power2.inOut",
                });
            }else{
                isToggled = false;
                alert(isToggled)
                gsap.to(toggleMenuBtnLine2, {
                    duration: 0.2,
                    width: "1.7vw",
                    ease: "power2.inOut"
                })
            }
        })
    }
}

new TextAnimations();