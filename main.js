let monoSynth;
let i = 0;



function setup() {
  let cnv = createCanvas(100, 100, WEBGL);
 cnv.mousePressed(playSynth);

  fill('yellow');
  textAlign(CENTER);
  text(accelerationX + accelerationY + accelerationZ , width/2, height/2);

  monoSynth = new p5.MonoSynth();
}

function playSynth() {
  userStartAudio();
  let note = random(['Fb4', 'G4']);
  let velocity = accelerationX + accelerationY + accelerationZ;
 let time = 0;
  let dur = 1/6;

  monoSynth.play(note, velocity, time, dur);
}

function draw() {
  background(0,0,0);
  text(accelerationX + accelerationY + accelerationZ, 0, 0);}
