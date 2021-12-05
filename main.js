img="";


function preload(){
    img = loadImage('IMG_8490.jpg');
}


function setup(){
    canvas = createCanvas(640,240);
    canvas.center();

}


function draw(){
    image(img,0,0,640,240);
    fill('#FF0000');
    text("bed",45,75);
    noFill();
    stroke('#FF0000');
    rect(30,60,450,450);
}
