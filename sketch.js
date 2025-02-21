let rectSize = 40;
let xLimit = 20;
let yLimit = 20;

let xCoord = 0;
let yCoord = 0;
let xCoordAnt = 0;
let yCoordAnt = 0;


function setup() {
  createCanvas(800, 800);

  fill(255);
  for (let i = 0; i < yLimit; i++) {
    for (let j = 0; j < xLimit; j++) {
      rect(rectSize * j, rectSize * i, rectSize, rectSize);
    }
  }

  // llena cuadrados negros
  fill(0);
  rect(rectSize * xCoord, rectSize * yCoord, rectSize, rectSize);
}

function draw() {

}


function keyPressed() {
  xCoordAnt = xCoord;
  yCoordAnt = yCoord;

  switch (keyCode) {
    case LEFT_ARROW:
      if (xCoord > 0) {
        xCoord--;
      }
      break;
    case RIGHT_ARROW:
      if (xCoord < xLimit - 1) {
        xCoord++;
      }
      break;
    case UP_ARROW:
      if (yCoord > 0) {
        yCoord--;
      }
      break;
    case DOWN_ARROW:
      if (yCoord < yLimit - 1) {
        yCoord++;
      }
      break;
  }

  // Llena cuadrados blancos. Limpia posicion anterior
  fill(255);
  rect(rectSize * xCoordAnt, rectSize * yCoordAnt, rectSize, rectSize);

  // llena cuadrados negros
  fill(0);
  rect(rectSize * xCoord, rectSize * yCoord, rectSize, rectSize);

  console.log("(X:" + xCoord + ",Y:" + yCoord + ")");
  console.log("(X:" + xCoordAnt + ",Y:" + yCoordAnt + ") (anterior)");
}