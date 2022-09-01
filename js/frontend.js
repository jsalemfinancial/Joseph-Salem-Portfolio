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
        // this.elements = this.topic[this.page].getElementsByClassName("basicContentElements");
        // this.numElements = this.elements.length;
        this.pageSelect();
    }

    pageSelect() {
        console.log("Page: " + this.page);
        // this.numElements = this.elements.length;
        // this.counter = 0;
        // this.slidesCounter();

        for (let i=0; i < this.numTopics; i++) {
            if (i == this.page) {
                console.log(this.topic[i].id + " is displayed.");
                this.topic[i].style.display = "flex";
            } else {
                this.topic[i].style.display = "none";
            };
        };

        // console.log("Elements: " + this.numElements);
        // for(let i = 0; i < this.numElements; i++) {
        //     if (i == this.counter) {
        //         this.elements[i].style.display = "flex";
        //     } else {
        //         this.elements[i].style.display = "none";
        //     };
        // };
    }
    // nextSlide() {
    //     this.elements[this.counter].style.display = "none";

    //     this.counter++;
    //     if (this.counter > this.numElements) {
    //         this.counter = 0;
    //     };
    //     this.counter = (this.counter)%this.numElements;

    //     this.elements[this.counter].style.display = "flex";
    //     this.slidesCounter();
    //     console.log("Executed. " + "Counter: " + this.counter + " Elements: " + this.numElements);
    // }

    // prevSlide() {
    //     this.elements[this.counter].style.display = "none";

    //     this.counter--;
    //     if (this.counter < 0) {
    //         this.counter = this.numElements - 1;
    //     };

    //     this.elements[this.counter].style.display = "flex";
    //     this.slidesCounter();
    //     console.log("Executed. " + "Counter: " + this.counter + " Elements: " + this.numElements);
    // }

    // slidesCounter() {
    //     document.getElementById("slidesCounter").id = "slidesCounter";
    //     document.getElementById("slidesCounter").textContent = (((this.counter)%this.numElements) + 1) + "/" + this.numElements;
    // }
}

class Chart {

    chartCount;
    chartHTML = ['new TradingView.widget({"autosize": true,"symbol": "NASDAQ:AAPL","interval": "D","timezone": "Etc/UTC","theme": "light","style": "1","locale": "en","toolbar_bg": "#f1f3f6","enable_publishing": false,"allow_symbol_change": true,"container_id": "tradingview_d0b39"});',
                'new TradingView.widget({"autosize": true, "symbol": "BITSTAMP:BTCUSD", "interval": "D", "timezone": "Etc/UTC", "theme": "light", "style": "1", "locale": "en", "toolbar_bg": "#f1f3f6", "enable_publishing": false, "allow_symbol_change": true, "container_id": "tradingview_c4b51"});'
                ];
    chartId = ["tradingview_d0b39", "tradingview_c4b51"];
    currentLightbox;

    constructor() {
        this.chartCount = document.getElementsByClassName("chartContentBox").length;
        this.currentLightbox = document.getElementsByClassName("chartLightbox");

        $("#MAChartButton").click(function() {
            chart.loadChartLightbox();
        });
    }

    unloadPrevChart(index) {
        for (let i=0; i < this.chartCount; i++) {
            if (i != index) {
                console.log("Removing: " + i)
                document.getElementById(this.chartId[i]).lastChild.innerHTML = "";
                document.getElementsByClassName("chartOverlay")[i].style.display = "flex";
                document.getElementsByClassName("chartContentBox")[i].style.backgroundSize = "100%";
            }
        }
    }
    loadChart(index) {
        var chartScriptProps = document.createElement("script");
        chartScriptProps.type = "text/javascript";
        chartScriptProps.innerHTML = this.chartHTML[index];
        document.getElementById(this.chartId[index]).appendChild(chartScriptProps);
        document.getElementsByClassName("chartOverlay")[index].style.display = "none";
        document.getElementsByClassName("chartContentBox")[index].style.backgroundSize = 0;
        document.getElementById(this.chartId[index]).style.display = "flex";

        this.unloadPrevChart(index)
    }
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

$(document).ready(function() {
    console.log("Document Ready!");
    document.getElementById("loading").style.display= "none";

    $(".mainContentBox").ready(function() {
        var scrollAnimComp = function () {
            document.getElementById("topPageButton").style.display = "none";
        };

        console.log("Top Content Ready!");
        
        document.getElementById("about").style.boxShadow = "0 -0.5vh 0 #b8bb26 inset";

        $(window).scroll(function() {
            var position = $(window).scrollTop();

            if (position > ($(document).height() * 0.05)) {
                $("#topPageButton").stop();
                document.getElementById("topPageButton").style.display = "flex";
                $("#topPageButton").animate({opacity: 1}, 400, "linear");
            };
            if (position < ($(document).height() * 0.05)) {
                $("#topPageButton").stop();
                $("#topPageButton").animate({opacity: 0}, 400, "linear", scrollAnimComp);
            };
        });

        $("#about").click(function() {
            SlideSet.page = 0;
            SlideSet.pageSelect();
            document.getElementById("about").style.boxShadow = "0 -0.5vh 0 #b8bb26 inset"; //Declaring these values for nav buttons manually is slighty more efficient than for-loops.
            document.getElementById("projects").style.boxShadow = "0 -0.5vh 0 #fabd2f inset";
            document.getElementById("interests").style.boxShadow = "0 -0.5vh 0 #fabd2f inset";
        });
    
        $("#projects").click(function() {
            SlideSet.page = 1;
            SlideSet.pageSelect();
            document.getElementById("projects").style.boxShadow = "0 -0.5vh 0 #b8bb26 inset";
            document.getElementById("about").style.boxShadow = "0 -0.5vh 0 #fabd2f inset";
            document.getElementById("interests").style.boxShadow = "0 -0.5vh 0 #fabd2f inset";
        });
    
        $("#interests").click(function() {
            SlideSet.page = 2;
            SlideSet.pageSelect();
            document.getElementById("interests").style.boxShadow = "0 -0.5vh 0 #b8bb26 inset";
            document.getElementById("about").style.boxShadow = "0 -0.5vh 0 #fabd2f inset";
            document.getElementById("projects").style.boxShadow = "0 -0.5vh 0 #fabd2f inset";
        });

        $(".chartOverlay").click(function() {
            chart.loadChart($(".chartOverlay").index(this));
            console.log(chart.loadChart($(".chartOverlay").index(this)));
        });

        $("#topPageButton").click(function() {
            $(window).scrollTop(0);
        });

        $(".fa-envelope").click(function() {
            loademail();
        });

        $(".fa-phone").click(function() {
            loadphone();
        });

        $(".chartButton").click(function() {
            chart.loadChartLightbox($(".chartButton").index(this));
        });

        $(".lightboxCloseButton").click(function() {
            chart.unloadChartLightbox($(".lightboxCloseButton").index(this));
        });
    });
});