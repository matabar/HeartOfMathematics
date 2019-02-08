var ind =0;
var x=[],y=[];
var n = 2;
function setup() {
  createCanvas(500, 500);
  background(220);
  frameRate(150);
  input = select("#num");
  for(let i = 0; i<100;i++){
    x[i]=50+200*(1+cos((i*3.1415)/50));
    y[i]=50+200*(1+sin((i*3.1415)/50));
  }
}

function draw() {
	line(x[ind],y[ind],x[(ind*n)%100],y[(ind*n)%100]);
  ind++;
  input.changed(()=>{
    ind =0;
    n=input.value();
    background(220);
  });
}