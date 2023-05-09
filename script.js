console.log("script.js loaded");

let currentAnimation = false;
// listener for when the page is loaded
window.addEventListener("load", () => {
    console.log("page loaded");
    document.body.classList.add("load");
});

document.querySelector(".button-install").addEventListener("click", () => {
    window.open("https://github.com/schooltape-community/schooltape/releases/latest", "_blank");
});
document.querySelector(".button-source").addEventListener("click", () => {
    window.open("https://github.com/schooltape-community/schooltape/", "_blank");
});

// for each of the 3 learning buttons, add an event listener to change the image
for (let i = 0; i < 3; i++) {
    document.getElementsByClassName("learning-button")[i].addEventListener("click", () => {
        var image = document.getElementsByClassName("learning-image")[0];
         // fade image out and in, if an animation is not already running and the image is not already the same
        if (!currentAnimation && !image.src.includes(document.getElementsByClassName("learning-button")[i].classList[1])) {
            currentAnimation = true;
            image.style.opacity = 0;
            setTimeout(() => {
                image.src = "assets/" + document.getElementsByClassName("learning-button")[i].classList[1] + ".jpg";
                setTimeout(() => {
                    image.style.opacity = 1;
                    currentAnimation = false;
                }, 100);
            }, 500);
        }
    });
}