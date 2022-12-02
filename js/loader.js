document.body.addEventListener('onload', async () => {
    await fetch('https://raw.githubusercontent.com/jsalemfinancial/Website/main/content/main_content.html')
        .then((response) => response.text())
        .then((content) => {
            document.getElementById("main-content-box").innerHTML = content;

            var texScript = document.createElement("script");
            texScript .type = "text/Javascript";
            texScript .innerHTML = "MathJax = {tex: {inlineMath: [['$', '$'], ['\\(', '\\)']]}}";
            document.body.appendChild(texScript );

            var polyFillScript = document.createElement("script");
            polyFillScript.type = "text/Javascript";
            polyFillScript.src = "https://polyfill.io/v3/polyfill.min.js?features=es6";
            document.body.appendChild(polyFillScript);

            var mathJaxScript = document.createElement("script");
            mathJaxScript.type = "text/Javascript";
            mathJaxScript.id = "Mathjax-script";
            mathJaxScript.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
            document.body.appendChild(mathJaxScript);

            var pageClasses = document.createElement("script");
            pageClasses.type = "text/Javascript";
            pageClasses.src = "js/page_classes.js";
            document.body.appendChild(pageClasses);

            var listeners = document.createElement("script");
            listeners.type = "text/Javascript";
            listeners.src = "js/listeners.js";
            document.body.appendChild(listeners);

        }).catch((error) => {
            alert('Content failed to load!', error);
        });
});