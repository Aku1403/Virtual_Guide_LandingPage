window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;
    
    document.querySelectorAll(".speed-0").forEach(el => {
        el.style.transform = `translateY(${scrollY * 0.1}px)`;
    });

    document.querySelectorAll(".speed-1").forEach(el => {
        el.style.transform = `translateY(${scrollY * 0.3}px)`;
    });

    document.querySelectorAll(".speed-2").forEach(el => {
        el.style.transform = `translateY(${scrollY * 0.5}px)`;
    });
});

function exploreIndia() {
    alert("Get ready to explore the beauty of India! 🇮🇳✨");
}
