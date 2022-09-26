var x_nose = 0;
var y_nose = 0;
function preload() {
mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function draw() {
image(video,0,0,300,300);
image(mustache,x_nose,y_nose,80,50);
}
function save() {
    save("picture.jpeg");
}

function modelLoaded() {
    console.log("Model has loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
x_nose=results[0].pose.nose.x-30;
y_nose=results[0].pose.nose.y+5;
    }
}
