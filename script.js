document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Coin Click Counter Logic
    let count = 0;
    const username = prompt("Enter your username:").trim();

    if (!username) {
        alert("Username is required to play!");
    } else {
        document.getElementById("coin").addEventListener("click", incrementCount);
    }

    async function incrementCount() {
        count++;
        document.getElementById("count").innerText = count;
    }
});

function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}
