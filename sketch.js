let osc, playing, freq, amp;

///////////SONIDO///////////

let noiseTime = 1000;
let noiseTam = 10;
let noiseCol = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  ///////////SONIDO///////////
  osc = new p5.Oscillator("sine");
}

function draw() {
  // background(255);

  ///////////POSICIÓN///////////
  let posX1 = map(noise(noiseTime + 70), 0, 1, 0, windowWidth);
  let posY1 = map(noise(noiseTime + 100), 0, 1, 0, windowHeight);

  ///////////SOMIDO///////////
  osc.start();
  freq = constrain(map(posX1, 0, posY1, 100, 500), 100, 500);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  osc.freq(posX1, posY1);
  osc.amp(posX1, posY1);
  ///////////COLOR RGB///////////
  let R1 = map(noise(noiseCol + 100), 0, 2, 255, 0);
  let G1 = map(noise(noiseCol), 0, 1, 50, 0);
  let B1 = map(noise(noiseCol), 0, 1, 5, 0);

  ///////////TAMAÑO///////////
  let tam1 = map(noise(noiseTam), 0, 1, 200, 0);

  ///////////COLOR VARIABLE///////////
  let colur1 = color(R1, G1, B1);

  noiseTime += 0.009;
  noiseTam += 0.09;
  noiseCol += 0.01;

  fill(colur1);
  stroke(100, 150, 0, 15);
  circle(posX1, posY1, tam1);
}
