let upArrow = document.getElementById("upArrow");
window.addEventListener("scroll", function () {
    if (this.scrollY > 150) {
        upArrow.style.display = "block";
    }
    else {
        upArrow.style.display = "none";
    }
});

let whatsApp = document.getElementById("whatsApp");
window.addEventListener("scroll", function () {
    if (this.scrollY > 150) {
        whatsApp.style.display = "block";
    }
    else {
        whatsApp.style.display = "none";
    }
});
