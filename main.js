function back() {
    window.location = "index.html";
}
status = "";
img1 = "";

function preload() {
    img1 = loadImage("bedroom.jpg");
}
function setup() {
    canvas = createCanvas(450, 450);
    canvas.center();
    ojectDetector = ml5.objectDetector('cocossd', modalLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}
function modalLoaded() {
    console.log("Modal Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
    }
}