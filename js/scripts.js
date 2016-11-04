function Player (mid){
    this.mid = mid;
    this.score = 0;
    this.runningTotal = 0;
    this.dice = 0;
    this.turn = 0;
}

Player.prototype.throw = function (){
  var result = Math.floor((Math.random() * 6) + 1);
  if (this.turn === 1){
    this.calculateRunningTotal();
    return this.dice = result;
  }
}

Player.prototype.hold = function (){
  return this.turn = 0;
}

Player.prototype.calculateRunningTotal = function (){
  if (this.dice != 1){
    return this.runningTotal += this.dice;
  }else {
    return this.runningTotal = 0;
  }
}


$(document).ready(function (){
  var player1 = new Player (1);
  var player2 =new Player (2);
  player1.turn = 1;


  $("#roll").click(function (){

    $("#player1score").text(player1.throw() + " " + player1.runningTotal);

  });
  //
  $("#hold").click(function (){

  });
});
