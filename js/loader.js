function setContent(content) {
    console.log("Setting Content. . .");
    document.getElementById("main-content-box").innerHTML = content;
}

document.addEventListener('DOMContentLoaded', async () => {
    await fetch('https://raw.githubusercontent.com/jsalemfinancial/Website/main/content/main_content.html')
        .then((response) => response.text())
        .then((content) => setContent(content))
        .then(() => console.log("Done Loading Main Content!"))
        .catch((error) => {
            alert('Content failed to load!', error);
        });
});