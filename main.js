let monoSynth;
let i = 0;
let font;
const notes = ["A3", "C4" ,"D4", "D4", "D4", "E4", "F4", "F4", "F4" ,"G4", "E4", "E4", "D4", "C4", "C4", "D4"]
let num = 0

function preload() {
  // Creates a p5.Font object.
  font = loadFont('Swansea-q3pd.ttf');
}
function adder() {
  num = num + 1
}

function setup() {
  let cnv = createCanvas(500, 500, WEBGL);
 cnv.mousePressed(adder);
textFont(font);
  fill('yellow');
  textAlign(CENTER);
  text(accelerationX + accelerationY + accelerationZ , width/2, height/2);

  monoSynth = new p5.MonoSynth();
}

function playSynth(x) {
  userStartAudio();
  
  let note = notes[num];
  let velocity = x;
 let time = 0;
  let dur = 1/100;

  monoSynth.play(note, velocity, time, dur);
}

function draw() {
  background(0,0,0)
  playSynth(abs((accelerationX) + abs(accelerationY)) / 90)
}
