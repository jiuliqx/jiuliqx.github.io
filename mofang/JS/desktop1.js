const headerEl = document.querySelector("header");

window.addEventListener("scroll", () => {
    let height = headerEl.getBoundingClientRect().height;

    if (window.pageYOffset - height > 400) {
        if (!headerEl.classList.contains("sticky")) {
            headerEl.classList.add("sticky");
        }
    } else {
        headerEl.classList.remove("sticky");
    }
})

const staggeringOption = {
    delay: 500,
    distance: "80px",
    duration: 400,
    easing: "ease-in-out",
    origin: "bottom"
};

ScrollReveal().reveal(".tool", { ...staggeringOption, interval: 300 });

const scroll = new SmoothScroll('nav a[href*="#"]','.noties a[href="#"]', {
    header: "header",
    offset: 80
})

