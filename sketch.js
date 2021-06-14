const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hourtime;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){ 

        background(backgroundImg);
        
    }

    Engine.update(engine);

    // write code to display time in correct format here
    textSize(50);
    text("Time: "+hourtime,10,50);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var time = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var timeJSON = await time.json();
    var datetime =timeJSON.datetime;
    hourtime=datetime.slice(11,13);
    console.log(hourtime);
    // add conditions to change the background images from sunrise to sunset
   if(hourtime>= 04&&hourtime<=06){
    bg = "sunrise1.png";
   }else if(hourtime>=06&&hourtime<=08){
    bg = "sunrise2.png";  
   }else if(hourtime>=23&&hourtime<=00){
    bg = "sunrise3.png";  
   }else if(hourtime>=00&&hourtime<=03){
    bg = "sunrise4.png";  
   }else {
    bg = "sunrise5.png";  
   }

    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg);
   
}
