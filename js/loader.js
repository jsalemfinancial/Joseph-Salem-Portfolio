function setContent(content) {
    console.log("Setting Content. . .");
    document.getElementById("main-content-box").innerHTML = content;
}

function loadTex() {
    console.log("Loading TeX Scripts. . .");

    var texRecalls = setInterval(() => {
        if (document.getElementById("main-content-box").innerHTML != "") {
            var texScript = document.createElement("script");
            texScript.type = "text/Javascript";
            texScript.innerHTML = "MathJax = {tex: {inlineMath: [['$', '$']]}}";
            document.body.appendChild(texScript);
    
            var polyFillScript = document.createElement("script");
            polyFillScript.type = "text/Javascript";
            polyFillScript.src = "https://polyfill.io/v3/polyfill.min.js?features=es6";
            document.body.appendChild(polyFillScript);
    
            var mathJaxScript = document.createElement("script");
            mathJaxScript.type = "text/Javascript";
            mathJaxScript.id = "Mathjax-script";
            mathJaxScript.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
            document.body.appendChild(mathJaxScript);

            clearInterval(texRecalls);
        } else {
            console.log("Retrying TeX. . .");
        };
    }, 50);
};

function loadClasses() {
    console.log("Loading Classes. . .");

    var classesRecalls = setInterval(() => {
        if (typeof document.getElementById("Mathjax-script") != "undefined") {

            var pageClasses = document.createElement("script");
            pageClasses.type = "text/Javascript";
            pageClasses.src = "js/page_classes.js";
            document.body.appendChild(pageClasses);

            clearInterval(classesRecalls);
        } else {
            console.log("Retrying Classes. . .");
        };
    }, 50);
};

function loadListeners() {
    console.log("Loading Listeners. . .");

    var listenersRecalls = setInterval(() => {
        try {
            console.log(TabSelector, Chart, MusicList, FoodGrid, GameReview, "Loaded!");

            var listeners = document.createElement("script");
            listeners.type = "text/Javascript";
            listeners.src = "js/listeners.js";
            document.body.appendChild(listeners);

            clearInterval(listenersRecalls);
        } catch (error) {
            console.log("Retrying Listeners. . .");
        };
    }, 50);
};

function loadTradingView() {
    console.log("Loading TradingView. . .");

    var tradingViewRecalls = setInterval(() => {
        try {

            var tradingViewScript = document.createElement("script");
            tradingViewScript.type = "text/Javascript";
            tradingViewScript.src = "https://s3.tradingview.com/tv.js";
            document.body.appendChild(tradingViewScript);

            clearInterval(tradingViewRecalls);
        } catch (error) {
            console.log("Retrying TradingView. . .");
        };
    }, 50);
};

document.addEventListener('DOMContentLoaded', async () => {
    await fetch('https://raw.githubusercontent.com/jsalemfinancial/Website/main/content/main_content.html')
        .then((response) => response.text())
        .then((content) => setContent(content))
        .then(() => loadTex())
        .then(() => loadClasses())
        .then(() => loadListeners())
        .then(() => loadTradingView())
        .catch((error) => {
            alert('Content failed to load!', error);
        });
});