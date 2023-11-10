console.log("script.js loaded");

let currentAnimation = false;
// listener for when the page is loaded
window.addEventListener("load", () => {
    console.log("page loaded");
    document.body.classList.add("load");
});

document.querySelector(".button-install").addEventListener("click", () => {
    window.open("https://github.com/42willow/schooltape/releases/latest", "_blank");
});
document.querySelector(".button-source").addEventListener("click", () => {
    window.open("https://github.com/42willow/schooltape/", "_blank");
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



// RELEASE BADGE
const owner = '42willow';
const repo = 'schooltape';
fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`)
.then(response => response.json())
.then(data => {
    const tagName = data.tag_name;
    const releaseName = data.name;
    const releaseUrl = data.html_url;
    const badge = document.querySelector(".release-badge");

    badge.innerHTML = `Latest Release: ${tagName}`;
    // add an onclick listener
    badge.addEventListener("click", () => {
        window.open(releaseUrl, "_blank");
    });
    
    console.log(`Latest release: ${tagName}`);
    console.log(`Release name: ${releaseName}`);
    console.log(`Release URL: ${releaseUrl}`);
})
.catch(error => {
    console.error('Error fetching the latest release:', error);
});


// Define the desired dimensions
const desiredWidth = 1045; // Replace with your desired width

// Get the actual dimensions of the website
const actualWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

// Compare the dimensions and show warning if necessary
if (actualWidth < desiredWidth) {
  // Show warning
  window.alert("Your screen appears to be too thin for this website. Please resize your window otherwise some elements will be bugged (it's poorly designed sorry)");
}


// Cult ad listener
const copyMarkdown = async () => {
    try {
        const response = await fetch('https://schooltape-community.github.io/assets/cult-ad.md');
        const markdown = await response.text();
        navigator.clipboard.writeText(markdown);
        console.log('Markdown copied to clipboard!');
        window.alert("Copied cult to clipboard!");
    } catch (error) {
        console.error('Error copying Markdown:', error);
        window.alert("Error copying cult to clipboard!");
    }
};

const copyButton = document.querySelector(".cult-ad");
copyButton.addEventListener('click', copyMarkdown);
