function makebubble(){
  var clutter ="";
  
  for(var i=1;i<=196;i++){
    var rn = Math.floor(Math.random()*10)
    clutter +=`<div id="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML=clutter;
}
makebubble();

var timer = 30;
function runTimer(){
  var timerint = setInterval(function(){
    if(timer>0){
      timer--;
      document.querySelector(".timerval").textContent = timer;
    }else{
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML =`<h1>Your score - ${score}<h1>`;
      document.querySelector(".hitval").innerHTML ="0";
    }
  },1000);
}
runTimer()

var hitrn=0;
function getNewHit(){
  hitrn = Math.floor(Math.random()*10)
  document.querySelector(".hitval").textContent=hitrn;
}
getNewHit();

var score=0 ;
function increaseScore(){
  score += 10;
  document.querySelector(".scoreval").textContent=score;
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
  var clickednum =(Number(dets.target.textContent));
  if(clickednum === hitrn){
    increaseScore(); 
    makebubble();
    getNewHit();
   
    
  }
});
