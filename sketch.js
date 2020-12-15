var dog, happyDog;
var foodStock;
var database; 
var count;
var author = "rehan";

function preload()
{
  dogimg = loadImage("Dog.png");
  happyDogimg = loadImage("happydog.png");
}

function setup() {
  
	createCanvas(500, 500);
  dog = createSprite(250,250,20,20);
  dog.addImage(dogimg);
  dog.scale = 0.25;
  database= firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  //count = 20;
}

function draw() {  
  background(46,139,87);
  //if(author === "rehan"){
  //throw new TypeError("Hello! Welcome to Virtual Pet One by Rehan! This isnt actually an error, so you can dismiss it, but this is how to use the app: Click the Up arrow key(🔼) to feed the dog. You can feed the dog 20 times, as you have 20 food! Thanks! 🚀")    
 // }
 //console.log("hello")
   //  console.clear();
  if(keyWentDown(UP_ARROW)){
    writeStock();
    dog.addImage(happyDogimg);
  }
  drawSprites();
  textSize = 3;
  fill("black");
  stroke(2);
  text("🦴 Bones Left: " + count,20,30);
 
}
function readStock(data){
  count = data.val();
}

function writeStock(data){

  if(count<1){
    count=0;
  }else{
    count=count-1;
  }
  var updatedPosition = database.ref("/");
  updatedPosition.set({
    'Food': count,
})
  
}

