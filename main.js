let arrayOfImages = [

    "imgs/blacksheep.png",


    "imgs/sheepfelt.png",
    "imgs/sheep.png"





]
let clicks = 0;
let

function onClick() {
    console.log(clicks);
    console.log("I have been clicked");
    document.getElementById("sheep1").src = arrayOfImages[clicks];

    clicks += 1;
    console.log("button1", clicks);

    if (clicks === arrayOfImages.length) {
        clicks = 0;
    }

};
