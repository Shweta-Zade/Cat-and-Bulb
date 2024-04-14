let bulb = document.getElementById("bulb");
let cat = document.getElementById("cat");
let onbulb = document.getElementById("onBulb");
let offbulb = document.getElementById("offBulb");
let hidecat = document.getElementById("hideCat");

// Function for ON the Bulb
function onbulbfun(){
    bulb.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    cat.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    onbulb.style.background = "green"; 
    offbulb.style.background = "grey";
}

// Function for OFF the Bulb
function offbulbfun(){
    bulb.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    cat.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    closeye.src ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pxfuel.com%2Fen%2Fdesktop-wallpaper-fhufz&psig=AOvVaw0xbalZJ5owY1SmsiQm_Gp0&ust=1705684755140000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCJjonoC554MDFQAAAAAdAAAAABAE"
    onbulb.style.background = "grey"; 
    offbulb.style.background = "red";
}
function hide(){
    bulb.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    cat.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pxfuel.com%2Fen%2Fdesktop-wallpaper-fhufz&psig=AOvVaw0xbalZJ5owY1SmsiQm_Gp0&ust=1705684755140000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCJjonoC554MDFQAAAAAdAAAAABAE";
    onbulb.style.background = "grey"; 
    offbulb.style.background = "red";
    hidecat.style.background = "green";
}

onbulb.addEventListener("click", onbulbfun);
offbulb.addEventListener("click",offbulbfun);
hidecat.addEventListener("click",hide);
