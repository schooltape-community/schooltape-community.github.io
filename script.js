document.querySelector(".button-install").addEventListener("click", () => {
    window.open("https://github.com/schooltape-community/schooltape/releases/latest", "_blank");
});
document.querySelector(".button-source").addEventListener("click", () => {
    window.open("https://github.com/schooltape-community/schooltape/", "_blank");
});

// listener for when the page is loaded
window.addEventListener("load", () => {
    document.body.classList.add("load");
});