function setup() {
canvas = createCanvas(640,480);
canvas.position(150, 150);
video = createCapture(VIDEO);
video.hide();
}
function draw() {
image(video, 230, 150, 220, 200);
fill(0, 255, 0);
stroke(0, 255, 0);
circle(50, 50, 80);

fill(0, 128, 0);
stroke(0, 128, 0);
rect(90, 40, 460, 20);

rect(90, 420, 460, 20);

fill(0, 255, 0);
stroke(0, 255, 0);
circle(50, 430, 80);

fill(0, 128, 0);
stroke(0, 128, 0);
rect(90, 40, 460, 20);

rect(90, 420, 460, 20);

fill(0, 255, 0);
stroke(0, 255, 0);
circle(590, 50, 80);

fill(0, 128, 0);
stroke(0, 128, 0);
rect(90, 40, 460, 20);

rect(90, 420, 460, 20);

fill(0, 255, 0);
stroke(0, 255, 0);
circle(590, 430, 80);

fill(0, 20, 200);
stroke(0, 128, 0);
rect(90, 40, 460, 20);

rect(90, 420, 460, 20);

rect(60, 90, -20, 300);

rect(580, 90, 20, 300);
}
function take_snapshot() {
Webcam.snap(function(data_uri) {
document.getElementById("webcam").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
}