function makebubble(){
  var clutter ="";
  var htrn;
  for(var i=1;i<=196;i++){
    htrn = Math.floor(Math.random()*10)
    clutter +=`<div id="bubble">${htrn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML=clutter;
}
makebubble();

function getNewHit(){
  var rn = Math.floor(Math.random()*10)
  document.querySelector(".hitval").textContent=rn;
}
getNewHit();

var score =0;
function increaseScore(){
  score +=10;
  document.querySelector(".scoreval").textContent=score;
}
increaseScore();

var timer = 60;
function runTimer(){
  var timerint = setInterval(function(){
    if(timer>0){
      timer--;
      document.querySelector(".timerval").textContent = timer;
    }else{
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML ="Game Over";
    }
  },1000);
}
runTimer()

document.querySelector("#pbtm").addEventListener("click",function(dets){
  console.log(Number(dets.target.textContent));
  if(clickednum === htrn){
    increaseScore();
    makebubble();
    getNewHit();
  }
});