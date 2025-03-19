const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// document.addEventListener("DOMContentLoaded", function () {
//     let footer = document.getElementById("footer");
//     let fixedImage = document.getElementById("fixed-image");
//     let fullScr = document.getElementById("full-scr");
//     let main = document.getElementById("main");

//     function checkFooterVisibility() {
//         let mainRect = main.getBoundingClientRect();
//         let windowHeight = window.innerHeight;

//         console.log("Main bottom:", mainRect.bottom, "Window height:", windowHeight);
//         console.log("Current z-index of footer:", footer.style.zIndex);

//         if (mainRect.bottom < windowHeight * 1.1) {  
//             console.log("✅ Footer should be above overlays now!");
//             footer.style.zIndex = "101"; // Bring footer forward
//             fixedImage.style.zIndex = "8";
//             fullScr.style.zIndex = "8";
//         } else {
//             console.log("❌ Footer should still be behind!");
//             footer.style.zIndex = "9";
//             fixedImage.style.zIndex = "99";
//             fullScr.style.zIndex = "99";
//         }
//     }

//     window.addEventListener("scroll", checkFooterVisibility);
// });




function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()