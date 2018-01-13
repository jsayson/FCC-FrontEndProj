$(document).ready(function(){
  var board;
  var player = "O";
  var computer = "X";
  var winCoord = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8]]
  var cells = document.querySelectorAll(".cell");
  $("#startGame").on("click", function(){
    $("#startGame").hide();
    board = Array.from(Array(9).keys());
  for(var i=0;i<cells.length;i++){
    cells[i].addEventListener("click", clickVal, false);
  }
  });
  function clickVal(e){
    drop(e.target.id, player);
  }
  function drop(locId, val){
    board[locId] = player;
    document.getElementById(locId).innerText = player;
  }
});