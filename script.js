document.querySelector(".button-install").addEventListener("click", () => {
    window.open("https://github.com/schooltape-community/schooltape/releases/latest", "_blank");
});
document.querySelector(".button-source").addEventListener("click", () => {
    window.open("https://github.com/schooltape-community/schooltape/", "_blank");
});

// get current url
const url = window.location.href;
console.log(url);
// get the last part of the url
const urlSplit = url.split("/");
const urlLast = urlSplit[urlSplit.length - 1];
console.log(urlLast);