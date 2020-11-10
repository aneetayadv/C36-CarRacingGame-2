var db;
var game,form,player;
var gameState = 0;
var playerCount;
var canvas;

function setup(){
    canvas = createCanvas(400,400);
    
    db = firebase.database();  

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    
    text(mouseX + "," + mouseY,mouseX,mouseY);
   // drawSprites();
}


function showError(){
    console.log("error");
}