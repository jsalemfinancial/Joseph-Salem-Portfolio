window.addEventListener('load', async () => {
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

        }).catch((error) => {
            alert('Content failed to load!', error);
        });
});