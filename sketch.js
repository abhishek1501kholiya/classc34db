var database;

var ball;
var dbposition;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballposition = database.ref('ball/position');
    ballposition.on("value",read,error);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
     database.ref('ball/position').set({
         'x': dbposition.x + x ,
         'y':  dbposition.y + y
        
     })
   
    }
function read(data){
  dbposition = data.val();
  ball.x = dbposition.x;
  ball.y = dbposition.y;
  console.log(dbposition);
}

function error(){
     console.log("error");
}
