import gsap from 'gsap';
import SplitTextJS from 'split-text-js';


class MenuAnimations {

    constructor() {
        this.animateMenu();
    }

    animateMenu() {
        const tl = gsap.timeline();
       const burgerBtn = document.querySelector("#burgerBtn");
       const burgerBar1 = document.querySelector('.bar1');
       const burgerBar2 = document.querySelector('.bar2');
       const burgerBar3 = document.querySelector('.bar3');
       const desktopMenuContainer = document.querySelector('.desktopNavMenu')
       const desktopMenuItems = gsap.utils.toArray(".desktopNavMenuItem")
       let isToggled = false;
       burgerBtn.addEventListener('click', function (){
        if(isToggled === false){
            isToggled = true;
            gsap.to(burgerBar2, {
                duration: 0.2,
                width: "0px",
                ease: "power2.inOut",
            });
            gsap.to(burgerBar1, {
                duration: 0.2,
                rotate: 45,
                transform: "translate(0, 6.5px)",
                ease: "power2.inOut"
            });
            gsap.to(burgerBar3, {
                duration: 0.2,
                rotate: -45,
                transform: "translate(0, -6.5px)",
                ease: "power2.inOut"
            });
            gsap.to(desktopMenuContainer, {
                duration: 0.3,
                height: "auto",
                zIndex: 9999,
                paddingBottom: 10,
                paddingBottom: 10,
                ease: "power2.inOut"
            });
            desktopMenuItems.forEach(item => {
                tl.to(item, {
                    duration: 0.4,
                    opacity: 1,
                    ease: "power3.inOut",
                    stagger: 0.05
                }, "<")
            })
        }else{
            isToggled = false;
            desktopMenuItems.forEach(item => {
                tl.to(item, {
                    duration: 0.4,
                    opacity: 0,
                    ease: "power3.inOut",
                    stagger: 0.05
                }, "<")
            })
            gsap.to(desktopMenuContainer, {
                duration: 0.3,
                height: "0px",
                
                ease: "power2.inOut",
                paddingBottom: 0,
                paddingBottom: 0,
            })
            gsap.to(burgerBar2, {
                duration: 0.2,
                width: "1.7vw",
                ease: "power2.inOut",
            });
            gsap.to(burgerBar1, {
                duration: 0.2,
                rotate: 0,
                transform: "translate(0, 0)",
                ease: "power2.inOut"
            });
            gsap.to(burgerBar3, {
                duration: 0.2,
                rotate: 0,
                transform: "translate(0, 0)",
                ease: "power2.inOut"
            });
           
            
        }
       })
       desktopMenuItems.forEach(item=>{
        item.addEventListener('click', function(){
            document.querySelector(".currentSectionTitle").innerText = item.children[0].innerText;
            // Here you will redirect to a section
            isToggled = false;
            desktopMenuItems.forEach(item => {
                tl.to(item, {
                    duration: 0.4,
                    opacity: 0,
                    ease: "power3.inOut",
                    stagger: 0.05
                }, "<")
            })
            gsap.to(desktopMenuContainer, {
                duration: 0.3,
                height: "0px",
                ease: "power2.inOut",
                paddingBottom: 0,
                paddingBottom: 0,
            })
            gsap.to(burgerBar2, {
                duration: 0.2,
                width: "1.7vw",
                ease: "power2.inOut",
            });
            gsap.to(burgerBar1, {
                duration: 0.2,
                rotate: 0,
                transform: "translate(0, 0)",
                ease: "power2.inOut"
            });
            gsap.to(burgerBar3, {
                duration: 0.2,
                rotate: 0,
                transform: "translate(0, 0)",
                ease: "power2.inOut"
            });
        })
       })
    }
    
}

new MenuAnimations();