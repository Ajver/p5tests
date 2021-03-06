const cirr = {
  x: 0,
  y: 0,
  visible: false
}

function setup() {
  const canvas = createCanvas(SJ.SCREEN_WIDTH, SJ.SCREEN_HEIGHT);
  canvas.parent("#game-container")

  SJ.canvasScaler = new SJ.CanvasScaler();
  SJ.canvasScaler.setup();


  setupInputManager();
}

function draw() {
  updateMouseScreenPosition();
  
  SJ.canvasScaler.transform();
  
  
  if(cirr.visible) {
    background(40, 60, 40);
    fill(180);
    circle(cirr.x, cirr.y, 60);
  }else {
    background(30);
  }

  fill(20);
  rect(0, 0, 200, 100);
  
  fill(200);
  textSize(24);
  text("X: " + SJ.mouseScreenX, 10, 28);
  text("Y: " + SJ.mouseScreenY, 10, 52);
  text("PRESSED: " + SJ.isMousePressed, 10, 78);
}

function onScreenTouched() {
  updateCirrPos();
  cirr.visible = true;
}

function updateCirrPos() {
  cirr.x = SJ.mouseScreenX;
  cirr.y = SJ.mouseScreenY;
}

function onScreenUntouched() {
  cirr.visible = false;
}

function onScreenDragged() {
  updateCirrPos();
}