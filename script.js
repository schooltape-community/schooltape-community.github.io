console.log("script.js loaded");

document.querySelector(".button-install").addEventListener("click", () => {
    window.open("https://github.com/schooltape-community/schooltape/releases/latest", "_blank");
});
document.querySelector(".button-source").addEventListener("click", () => {
    window.open("https://github.com/schooltape-community/schooltape/", "_blank");
});

// listener for when the page is loaded
window.addEventListener("load", () => {
    console.log("page loaded");
    document.body.classList.add("load");
});

document.querySelectorAll(".dialog-opener").forEach((button) => {
    button.addEventListener("click", () => {
        var buttonClass = button.classList[1];
        var dialogElement = document.getElementsByClassName(buttonClass)[1];
        dialogElement.hidden = false;
        console.log(buttonClass + " dialog opened");
    });
});

document.querySelectorAll(".dialog-dismiss").forEach((button) => {
    console.log("button found");
    button.addEventListener("click", () => {
        // hides all the fluent dialogs
        document.querySelectorAll("fluent-dialog").forEach((dialog) => {
            dialog.hidden = true;
        });
        console.log("dialogs closed");
    });
});