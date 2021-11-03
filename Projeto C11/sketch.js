var Jaxon, Jaxon_running, Path, Path_running


function preload(){
  //imagens pré-carregadas
  Jaxon_running = loadAnimation("Runner-1.png", "Runner-2.png")
  Path = loadAnimation("path.png")

}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
   Path = createSprite(400,400,10,10)
   Path.addAnimation("running", Path_running);
   Jaxon = createSprite(200,200,50,50);
   Jaxon.addAnimation("running", Jaxon_running);
 
function draw() {

}
 background(0);
 drawSprite();

 if(path.y > 400){
  path.y = height/2;
}

  //if(path.y > 400){
  //path.y = height/2;}

  //if(path.y > 400){path.y = height/2;}

  // leftBoundary.invisible = false;
  // leftBoundary.visible = true;
   leftBoundary.invisible = true;
  // left Boundary.visible = false;