// navigation menu

(() => {
    const hamburgerBtn = document.querySelector(".hamburger-button"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    function showNavMenu() {
        console.log('oke');
        navMenu.classList.toggle("open");
        bodyScrollingToggle();
    }
    function fadeOutEffect(){
        document.querySelector(".fade-out-effect").classList.add('active');
        setTimeout(() => {
            document.querySelector(".fade-out-effect").classList.remove("active")
        }, 1000)
    }
    function hideNavMenu() {
        navMenu.classList.remove("open");
        fadeOutEffect();
        bodyScrollingToggle();
    }
    // attach and event handler to document
    document.addEventListener("click", (event) => {
        if(event.target.classList.contains('link-item')){
            // make sure event.target.hash has a value before overriding default behavior
            
            if(event.target.hash !== ""){
                // preven default anchor click behavior
                event.preventDefault();
                const hash = event.target.hash;
                console.log(hash);
                // deactivate existing active 'section'
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");
                // activate new 'section'
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                // deactivate existing active navigation menu 'link-item'
                navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow")
                navMenu.querySelector(".active").classList.remove("active", "inner-shadow");
                // if clicked 'link-item is contained withing the nvigation menu'
                if(navMenu.classList.contains("open")){
                // activate new navigation menu 'link--item'
                event.target.classList.add("active", "inner-shadow");
                event.target.classList.remove("outer-shadow", "hover-in-shadow");
                // hide navigation menu
                hideNavMenu();
                }
                else{
                    let navItems = navMenu.querySelectorAll(".link-item");
                    navItems.forEach((item) => {
                        if(hash == item.hash){
                            // activate new navigation menu 'link-item'
                            event.target.classList.add("active", "inner-shadow");
                            event.target.classList.remove("outer-shadow", "hover-in-shadow")
                        };
                    })
                    fadeOutEffect();
                }
            
            }
        }
    })
    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);
})();


// about section tabs

(() => {
        const aboutSection = document.querySelector(".about-section");
        const tabsContainer = document.querySelector('.about-tabs');

        tabsContainer.addEventListener("click", (event) =>{
            if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
                const target = event.target.getAttribute("data-target");
                tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");;
                event.target.classList.add("active", "outer-shadow");
                aboutSection.querySelector(".tab-content.active").classList.remove("active");
                console.log(target);
                aboutSection.querySelector(target).classList.add("active");
            }
        } )

})();

// hide all sections exccept active
(() => {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        if(!section.classList.contains("active")){
            section.classList.add("hide");
        }
    })

    // theme colors
    
})();

const alternateStyle = document.querySelectorAll(".alternate-style");

function setActivateStyle(color){
    alternateStyle.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled", "true")
        }
    })
}

// theme light
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun")
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

window.addEventListener("load", () => {
    // preloader
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 300)
})

