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
    }
    
    loadChartLightbox(index) {
        this.currentLightbox[index].style.display = "flex";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }

    unloadChartLightbox(index) {
        this.currentLightbox[index].style.display = "none";
        document.getElementsByTagName("body")[0].style.overflow = "auto";
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