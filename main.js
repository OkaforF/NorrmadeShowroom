let arrayOfImages = [
    "imgs/sheeprear.png",
     "imgs/feltrear.png",
    "imgs/sheepfelt.png"





]


let rightIcon = document.querySelector("#right-icon");
let price = document.querySelector("#price");





rightIcon.addEventListener("click", imageSwitch);


numberOfClicks = 0;

function () {

    numberOfClicks++;

    if (numberOfClicks == arrayOfImages.length) {
        numberOfClicks = 0;
    }

}
