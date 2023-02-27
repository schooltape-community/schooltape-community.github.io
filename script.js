console.log("script.js loaded");

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
        // if an animation is already running, don't do anything
        if (!image.classList.contains("animation") && !image.src.includes(document.getElementsByClassName("learning-button")[i].classList[1])) {
            // add the class "animation" to the image
            image.classList.add("animation");
            // change the image
            setTimeout(() => { // delay changing image to make animation look better
                image.src = "assets/" + document.getElementsByClassName("learning-button")[i].classList[1] + ".jpg";
            }, 500);

            image.style.animation = "fade-out-in 1s ease-in-out";
            setTimeout(() => {
                image.style = "";
            } , 1000);
            // remove the class "animation" from the .learning-image
            setTimeout(() => {
                image.classList.remove("animation");
            } , 1000);
        }
    });
}