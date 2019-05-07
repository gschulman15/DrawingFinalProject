//get context for canvas 1
const c1 = document.getElementById('c1');
const context1 =c1.getContext('2d');

//get context for canvas 2
//const c2 = document.getElementById('c2');
//const context2 = c2.getContext('2d');

let width1;
let height1;
//let width2;
//let height2;
let spotlight = document.getElementById('light');

function setup(){

width1 = window.innerWidth;

height1 = window.innerHeight;
//for fixed canvas size
//width1=c1.width;
//height1=c1.height;
console.log(width1);


//width2 = c2.style.width;
//height2 = c2.style.height;

//c2.style.width=width2 +'px';
//c2.style.height=height2 +'px';
//console.log(width2);
//console.log(height2);

//set CSS display size
 c1.style.width = width1 + 'px';
 c1.style.height=height1 +'px';
//  c2.style.width= width2 + 'px';
//c2.style.height = height2 + 'px';

  //set number of display pix, scaled
  var scale = window.devicePixelRatio;

c1.width = width1 * scale;
c1.height = height1 * scale;

//  c2.width = width2 * scale;
//  c2.height= height2 * scale;

//normalize coordinate system
context1.scale(scale, scale);
//context2.scale(scale,scale);


}

let angle =0;
let angle2 =0;
let angle3=0;
let a=0.5;
let b=0.1;
let c=0.01;
//var x2;
function draw(){
  context1.clearRect(0, 0, width1, height1);


//  context1.fillStyle='lightblue';
  //context1.fillRect(0, 0, width1, height1);

//  context2.fillStyle='red';
//  context2.fillRect(0, 0, width2, height2);

context1.strokeStyle='black';
context1.fillStyle='black';
context1.beginPath();
context1.ellipse(width1/2, height1-40, 100, 40, 0, 0, 2*Math.PI, false);
context1.stroke();
context1.fill();





//quitting attempt to add path from custom svg
//let spotlight = new Path2D("M24.067 17.1c0 1.344-2.343 2.433-5.233 2.433s-5.233-1.089-5.233-2.433c0-1.344 2.343-2.433 5.233-2.433s5.233 1.089 5.233 2.433z");

context1.save();

//fixture
context1.translate(width1/2, height1-100);
context1.rotate((Math.PI/180)* angle);
context1.fillStyle="black";
let fixture = new Path2D();
fixture.moveTo(-100, -50);
fixture.quadraticCurveTo(0, 25, 100, -50);
fixture.lineTo(100, 50);
fixture.lineTo(-100, 50);
fixture.lineTo(-100, -50);
context1.fill(fixture);

//orange shine
context1.rotate((Math.PI/180)*angle2);
context1.fillStyle="orange";
context1.beginPath();
context1.moveTo(-100,-60);
context1.lineTo(100,-60);
context1.lineTo(300, height1*-1);
context1.lineTo(-300, height1*-1);
context1.lineTo(-100, -60);
context1.fill();

//yellow light
context1.rotate((Math.PI/180)* angle3);
context1.fillStyle="yellow";
//context1.fill(spotlight);
context1.beginPath();
context1.ellipse(0, -60, 100, 40, 0, 0, 2*Math.PI, false);
context1.fill();


context1.restore();
angle +=a;
angle2 +=b;
angle3 +=c;
if (angle <= -30 || angle>=30 ){
  angle *= -1;
  angle2*=-b;
  angle3*=-c;
}

requestAnimationFrame(draw);


//let practice = new Path2D("M1 1 Q 101 50 201 1 L201 101 1 101 1 1z");
//context1.fillStyle="blue";
//context1.fill(practice);



//attempt to add spotlight as external svg
  //var svg1 = new Image();
  //svg1.onload=function(){
    //context1.drawImage(svg1, 0, 0);
  //}
  //svg1.src="spotlight.svg";
}

setup();
draw();

//part of external svg attempt
  //spotlight.addEventListener('load', draw);

window.addEventListener('resize', function(){
  setup();
  draw();
});
