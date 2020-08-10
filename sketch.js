//Create variables here
var food;
var dog;
 var database, foodS, foodStock;
function preload()
{
  this.image = loadImage("sprites/dogimg.png");
  this.image = loadImage("sprites/dogimg.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
 foodstock=database.ref('Food');
 foodstock.on("value",readstock);
}


function draw() {  
if(keyWentDown(UP_ARROW)){
  writestock(foods);
  dog.addImage(dogimg1);
}
  drawSprites();
  text("Note press up arrow to feed the dog")

}

function readStock(data){
  food=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x 
  })
}


