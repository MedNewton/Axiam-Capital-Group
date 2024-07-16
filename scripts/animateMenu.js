import gsap from 'gsap';
import SplitTextJS from 'split-text-js';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

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

        // Mobile : 
        const mobileBurgerBtn = document.querySelector("#mobileBurgerBtn");
        const mobileBurgerBar1 = document.querySelector('.mobileBar1');
        const mobileBurgerBar2 = document.querySelector('.mobileBar2');
        const mobileBurgerBar3 = document.querySelector('.mobileBar3');
        const mobileMenuContainer = document.querySelector('.mobileNavMenu');
        const mobileMenuItems = gsap.utils.toArray(".mobileNavMenuItem");
        let isMobileToggles = false;

        burgerBtn.addEventListener('click', function () {
            if (isToggled === false) {
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
            } else {
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

        mobileBurgerBtn.addEventListener('click', function () {
            if (isMobileToggles === false) {
                isMobileToggles = true;
                gsap.to(mobileBurgerBar2, {
                    duration: 0.2,
                    width: "0px",
                    ease: "power2.inOut",
                });
                gsap.to(mobileBurgerBar1, {
                    duration: 0.2,
                    rotate: 45,
                    transform: "translate(0, 10px)",
                    ease: "power2.inOut"
                });
                gsap.to(mobileBurgerBar3, {
                    duration: 0.2,
                    rotate: -45,
                    transform: "translate(0, -10px)",
                    ease: "power2.inOut"
                });
                gsap.to(mobileMenuContainer, {
                    duration: 0.3,
                    height: "auto",
                    zIndex: 9999,
                    paddingBottom: 10,
                    paddingBottom: 10,
                    ease: "power2.inOut"
                });
                mobileMenuItems.forEach(item => {
                    tl.to(item, {
                        duration: 0.4,
                        opacity: 1,
                        ease: "power3.inOut",
                        stagger: 0.05
                    }, "<")
                })
            } else {
                isMobileToggles = false;
                mobileMenuItems.forEach(item => {
                    tl.to(item, {
                        duration: 0.4,
                        opacity: 0,
                        ease: "power3.inOut",
                        stagger: 0.05
                    }, "<")
                })
                gsap.to(mobileMenuContainer, {
                    duration: 0.3,
                    height: "0px",

                    ease: "power2.inOut",
                    paddingBottom: 0,
                    paddingBottom: 0,
                })
                gsap.to(mobileBurgerBar2, {
                    duration: 0.2,
                    width: "8vw",
                    ease: "power2.inOut",
                });
                gsap.to(mobileBurgerBar1, {
                    duration: 0.2,
                    rotate: 0,
                    transform: "translate(0, 0)",
                    ease: "power2.inOut"
                });
                gsap.to(mobileBurgerBar3, {
                    duration: 0.2,
                    rotate: 0,
                    transform: "translate(0, 0)",
                    ease: "power2.inOut"
                });


            }
        })
        desktopMenuItems.forEach(item => {
            item.addEventListener('click', function () {
                document.querySelector(".currentSectionTitle").innerText = item.children[0].innerText;
                let targetSection = "#" + item.id.split("-")[0].toString();
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
                document.querySelector(targetSection).scrollIntoView()
                //gsap.to(window, { duration: 2, scrollTo: targetSection });
            })
        })

        mobileMenuItems.forEach(item => {
            item.addEventListener('click', function () {
                document.querySelector(".currentMobileSectionTitle").innerText = item.innerText;
                let targetSection = "#" + item.id.split("-")[0].toString();
                // Here you will redirect to a section
                isMobileToggles = false;
                mobileMenuItems.forEach(item => {
                    tl.to(item, {
                        duration: 0.4,
                        opacity: 0,
                        ease: "power3.inOut",
                        stagger: 0.05
                    }, "<")
                })
                gsap.to(mobileMenuContainer, {
                    duration: 0.3,
                    height: "0px",

                    ease: "power2.inOut",
                    paddingBottom: 0,
                    paddingBottom: 0,
                })
                gsap.to(mobileBurgerBar2, {
                    duration: 0.2,
                    width: "8vw",
                    ease: "power2.inOut",
                });
                gsap.to(mobileBurgerBar1, {
                    duration: 0.2,
                    rotate: 0,
                    transform: "translate(0, 0)",
                    ease: "power2.inOut"
                });
                gsap.to(mobileBurgerBar3, {
                    duration: 0.2,
                    rotate: 0,
                    transform: "translate(0, 0)",
                    ease: "power2.inOut"
                });
                document.querySelector(targetSection).scrollIntoView()
                //gsap.to(window, { duration: 2, scrollTo: targetSection });
            })
        })

        
    }

}

new MenuAnimations();