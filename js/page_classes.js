let TabSelector = new class TabSelector {
    constructor() {
        this.tabContent = document.getElementById("main-content-box").getElementsByClassName("main-content-elements");
        this.numTabs = document.getElementsByClassName("navbar-button").length;
    }

    pageSelect(pageNum) {
        for (var i = 0; i < this.numTabs; i++) {
            if (i == pageNum) {
                this.tabContent[i].style.display = "flex";
            } else {
                this.tabContent[i].style.display = "none";
            };
        };
    }

    exists() {
        console.log("Tab Selector Ready.");
    }
}

let Chart = new class Chart {
    constructor() {
        this.currentLightbox = document.getElementsByClassName("chart-lightbox");
        this.chartSrcs = ["", "https://raw.githubusercontent.com/jsalemfinancial/Website/main/content/ppo_chart.html", "", ""]
        // this.preloadcharts();
    }
    
    loadChartLightbox(index) {
        this.currentLightbox[index].style.display = "flex";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }

    unloadChartLightbox(index) {
        this.currentLightbox[index].style.display = "none";
        document.getElementsByTagName("body")[0].style.overflowY = "auto";
    }

    async preloadcharts() {
        var chartFrame = document.createElement("div");
        chartFrame.style.backgroundColor = "red";
        chartFrame.style.width = "50vw";
        chartFrame.style.height = "50vh";

        for (var i = 0; i < this.currentLightbox.length; i++) {
            await fetch("https://raw.githubusercontent.com/jsalemfinancial/Website/main/content/ppo_chart.html")
            .then((response) => response.text())
            .then((source) => this.currentLightbox[i].appendChild(source))
            .catch((error) => {
                console.log('Failed to retrieve chart!', error);
            });
        };
    }
}

let MusicList = new class MusicList {
    constructor() {
        
    }
}

let FoodGrid = new class FoodGrid {
    constructor() {
        
    }
}

let GameReview = new class GameReview {
    constructor() {
        
    }
}