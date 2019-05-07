let selected;

function downstairs(){

  var answer = document.getElementById('label');
  answer.innerHTML = "downstairs";
  selected = document.getElementById('down');
  

}

function upstairs(){
  var answer = document.getElementById('label');
  answer.innerHTML = "upstairs";
}

function pickup(){
  var answer = document.getElementById('label');
  answer.innerHTML = "pickup";
}

function putdown(){
  var answer = document.getElementById('label');
  answer.innerHTML = "putdown";
}

function jump(){
  var answer = document.getElementById('label');
  answer.innerHTML = "jump";
}

function cross(){
  var answer= document.getElementById('label');
  answer.innerHTML="cross";
}

function stop(){
  var answer=document.getElementById('label');
  answer.innerHTML="stop";
}

function take(){
  var answer=document.getElementById('label');
  answer.innerHTML="take";
}


function restore(){
  var answer = document.getElementById('label');
  answer.innerHTML = "hover over an icon to see what it represents";
}
