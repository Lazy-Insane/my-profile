// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = e.currentTarget.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    }
});
