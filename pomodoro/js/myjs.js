$(document).ready(function(){
var breaks = parseInt($("#min").html());
var timer = parseInt($("#time").html());
//console.log($("#music")[0]);
$("#clock").hide();
$("#reset").hide();
//start of the timer
$("#start").on("click",function(){
var myTimer = setInterval(pomodoroTime, 1000);
var breaks = parseInt($("#min").html());
var timer = parseInt($("#time").html());

  timer = timer * 60;
  breaks = breaks * 60;
  $("#break, #timer, #desc, #start").hide();
$("#reset").on("click", reset);
function pomodoroTime(){
  $("#clock").show();
  timer-=1;
  if(timer===0){
    $("#music")[0].play()
    clearInterval(myTimer);
    var startBreaks = setInterval(breakTime, 1000);
  }
  if(timer%60>=10){
    $("#currTime").html(Math.floor(timer/60)+":"+(timer%60));
  }
  else{
    $("#currTime").html(Math.floor(timer/60)+":"+"0"+(timer%60));
  }
  //start of break time
    function breakTime(){
          breaks-=1;
            $("#music")[0].pause();
            $("#music")[0].currentTime = 0;
          if(breaks===0){
            $("#music")[0].play();
            clearInterval(startBreaks);
            $("#reset").show();
          }
          if(breaks%60>=10){
            $("#currTime").html(Math.floor(breaks/60)+":"+(breaks%60));
          }
          else{
            $("#currTime").html(Math.floor(breaks/60)+":"+"0"+(breaks%60));
          }
    }
}
function reset(){
  $("#music")[0].pause();
  $("#music")[0].currentTime = 0;
  $("#break, #timer, #desc, #start").show();
  $("#clock").hide();
  $("#reset").hide();
  $("#min").html(25);
  $("#time").html(25);
  clearInterval(startBreaks);
  clearInterval(myTimer);
}
});


//break timer
$("#break5Min").on("click", function(){
  if(breaks>5){
  breaks -= 5;
  $("#min").html(breaks);
  }
});
$("#break5Add").on("click",function(){
  if(breaks<60){
  breaks += 5;
  $("#min").html(breaks);
  }
});
//pomodoro timer
$("#timer5Min").on("click", function(){
  if(timer>5){
  timer -= 5;
  $("#time").html(timer);
  }
});
$("#timer5Add").on("click",function(){
  if(timer<60){
  timer += 5;
  $("#time").html(timer);
  }
});


});