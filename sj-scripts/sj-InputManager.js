
const SPACE = 32;

const onKeyPressed = () => { 
  print("Key pressed");
}

const onKeyReleased = () => {
  print("Key released");
}

const onTouchStarted = () => {
  updateMouseScreenPosition();
  
  SJ.isMousePressed = true;

  print("Touch started");

  if(isMouseInCanvas()) {
    onScreenTouched();
  }
}

const onTouchEnded = () => {
  SJ.isMousePressed = false;

  print("Touch ended");

  if(isMouseInCanvas()) {
    onScreenUntouched();
  }
}

const onMouseMoved = () => {
  print("Mouse moved")
}

const onMouseDragged = () => {
  print("Mouse dragged")

  if(isMouseInCanvas()) {
    onScreenDragged();
  }
}

const isMouseInCanvas = () => {
  return mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height;
}

const updateMouseScreenPosition = () => {
  SJ.mouseScreenX = floor(mouseX / SJ.canvasScaler.scale);
  SJ.mouseScreenY = floor(mouseY / SJ.canvasScaler.scale);
}

function setupInputManager() {
  keyPressed = onKeyPressed;
  keyReleased = onKeyReleased;
  touchStarted = onTouchStarted;
  touchEnded = onTouchEnded;
  mouseMoved = onMouseMoved;
  mouseDragged = onMouseDragged;
}
