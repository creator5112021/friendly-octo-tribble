gameStatus = "";
function start() {

}
function setup() {
    canvas = createCanvas(700,600);
    canvas.center()
    video = createCapture(VIDEO)
    video.size(600,500)
    video.hide()
}

function draw() {
    image(video,0,0,600,500)
}
