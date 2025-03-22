window.addEventListener("scroll", function() {
    let navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#1e1e1e"; // Color sólido cuando haces scroll
    } else {
        navbar.style.backgroundColor = "transparent"; // Transparente al inicio
    }
});
