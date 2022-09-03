class Slides {

    topic;
    numTopics;
    page;
    counter;
    currentSlide;
    elements;
    numElements;

    constructor() {
        this.page = 0;
        this.counter = 0;
        this.topic = document.getElementById("mainContentBox").getElementsByClassName("mainContentElements");
        this.numTopics = document.getElementsByClassName("navbarButton").length;
        this.pageSelect();
    }

    pageSelect() {
        console.log("Page: " + this.page);

        for (let i=0; i < this.numTopics; i++) {
            if (i == this.page) {
                console.log(this.topic[i].id + " is displayed.");
                this.topic[i].style.display = "flex";
            } else {
                this.topic[i].style.display = "none";
            };
        };
    }
}

class Chart {
    // chartCount;
    currentLightbox;
    // chartHTML = ['new TradingView.widget({"autosize": true,"symbol": "NASDAQ:AAPL","interval": "D","timezone": "Etc/UTC","theme": "light","style": "1","locale": "en","toolbar_bg": "#f1f3f6","enable_publishing": false,"allow_symbol_change": true,"container_id": "tradingview_d0b39"});',
    //             'new TradingView.widget({"autosize": true, "symbol": "BITSTAMP:BTCUSD", "interval": "D", "timezone": "Etc/UTC", "theme": "light", "style": "1", "locale": "en", "toolbar_bg": "#f1f3f6", "enable_publishing": false, "allow_symbol_change": true, "container_id": "tradingview_c4b51"});'
    //             ];
    // chartId = ["tradingview_d0b39", "tradingview_c4b51"];

    constructor() {
        // this.chartCount = document.getElementsByClassName("chartContentBox").length;
        this.currentLightbox = document.getElementsByClassName("chartLightbox");
    }

    // unloadPrevChart(index) {
    //     for (let i=0; i < this.chartCount; i++) {
    //         if (i != index) {
    //             console.log("Removing: " + i)
    //             document.getElementById(this.chartId[i]).lastChild.innerHTML = "";
    //             document.getElementsByClassName("chartOverlay")[i].style.display = "flex";
    //             document.getElementsByClassName("chartContentBox")[i].style.backgroundSize = "100%";
    //         }
    //     }
    // }

    // loadChart(index) {
    //     var chartScriptProps = document.createElement("script");
    //     chartScriptProps.type = "text/javascript";
    //     chartScriptProps.innerHTML = this.chartHTML[index];
    //     document.getElementById(this.chartId[index]).appendChild(chartScriptProps);
    //     document.getElementsByClassName("chartOverlay")[index].style.display = "none";
    //     document.getElementsByClassName("chartContentBox")[index].style.backgroundSize = 0;
    //     document.getElementById(this.chartId[index]).style.display = "flex";

    //     this.unloadPrevChart(index)
    // }
    loadChartLightbox(index) {
        document.getElementsByClassName("chartLightbox")[index].style.display = "flex";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }

    unloadChartLightbox(index) {
        document.getElementsByClassName("chartLightbox")[index].style.display = "none";
        document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
}

const chart = new Chart();
const SlideSet = new Slides();

window.addEventListener("load", function() {
    console.log("Document Ready!");
    document.getElementById("loading").style.display= "none";

    console.log("Top Content Ready!");
    
    document.getElementById("about").style.boxShadow = "0 -0.5vh 0 #b8bb26 inset"; //Initial selected tab.

    window.addEventListener("scroll", function() {
        const topPageButtonKeyframes = [
            {opacity: 0}, 
            {opacity: 1}
        ];

        var pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, 
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ); //Thanks StackExchange.

        if ((window.scrollY || document.documentElement.scrollTop) > (pageHeight * 0.1) && (document.getElementById("topPageButton").style.display == "")) {
            document.getElementById("topPageButton").animate(topPageButtonKeyframes, {duration: 500, fill: "forwards"});
            document.getElementById("topPageButton").style.display = "flex";
            
        } else if ((window.scrollY || document.documentElement.scrollTop) < (pageHeight * 0.1) && (document.getElementById("topPageButton").style.display == "flex")) {
            document.getElementById("topPageButton").style.display = "";
        };
    });

    document.getElementById("topPageButton").addEventListener("click", function() {
        window.scrollY = 0;
        document.documentElement.scrollTop = 0;
    });

    document.getElementById("about").addEventListener("click", function() {
        SlideSet.page = 0;
        SlideSet.pageSelect();
        document.getElementById("about").style.boxShadow = "0 -0.5vh 0 #b8bb26 inset"; //Declaring these values for nav buttons manually is slighty more efficient than iteration.
        document.getElementById("projects").style.boxShadow = "0 -0.5vh 0 #fabd2f inset";
        document.getElementById("interests").style.boxShadow = "0 -0.5vh 0 #fabd2f inset";
    });

    document.getElementById("projects").addEventListener("click", function() {
        SlideSet.page = 1;
        SlideSet.pageSelect();
        document.getElementById("projects").style.boxShadow = "0 -0.5vh 0 #b8bb26 inset";
        document.getElementById("about").style.boxShadow = "0 -0.5vh 0 #fabd2f inset";
        document.getElementById("interests").style.boxShadow = "0 -0.5vh 0 #fabd2f inset";
    });

    document.getElementById("interests").addEventListener("click", function() {
        SlideSet.page = 2;
        SlideSet.pageSelect();
        document.getElementById("interests").style.boxShadow = "0 -0.5vh 0 #b8bb26 inset";
        document.getElementById("about").style.boxShadow = "0 -0.5vh 0 #fabd2f inset";
        document.getElementById("projects").style.boxShadow = "0 -0.5vh 0 #fabd2f inset";
    });

    document.querySelectorAll(".chartButton").forEach(overlay => {
        overlay.addEventListener("click", function(event) {
            console.log("click!");
            for (var i = 0; i < document.getElementsByClassName("chartButton").length; i++) {
                if (document.getElementsByClassName("chartButton")[i] == event.target) {
                    chart.loadChartLightbox(i);
                };
            };
        });
    });

    document.querySelectorAll(".lightboxCloseButton").forEach(overlay => {
        overlay.addEventListener("click", function(event) {
            console.log("click!");
            for (var i = 0; i < document.getElementsByClassName("lightboxCloseButton").length; i++) {
                if (document.getElementsByClassName("lightboxCloseButton")[i] == event.target) {
                    chart.unloadChartLightbox(i);
                };
            };
        });
    });
});