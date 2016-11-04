function Player (mid){
    this.mid = mid;
    this.score = 0;
    this.runningTotal = 0;
    this.dice = 0;
    this.turn = 0;
}

Player.prototype.throw = function (){
  var result = Math.floor((Math.random() * 6) + 1);
  // this.calculateRunningTotal(); placing here adds delay of one press
  if (this.turn === 1 && result !=1){


    return this.dice = result;
  }else if (result === 1 && this.turn === 1){
    this.turn = 0;
    this.runningTotal = 0;
    return this.dice = 1;
  }
}

Player.prototype.hold = function (){
  if (this.turn === 1){
    this.score += this.runningTotal;
  }
  return this.turn = 0;
}

Player.prototype.calculateRunningTotal = function (){
  if (this.dice != 1 && this.turn != 0){
    return this.runningTotal += this.dice;
  }else if (this.dice === 1){
    return this.runningTotal = 0;
  }
}


$(document).ready(function (){
  var player1 = new Player (1);
  var player2 = new Player (2);
  player1.turn = 1;


  $("#roll").click(function (){
    $("#dice").text(player1.throw());
    // took away this
    player1.calculateRunningTotal();
    $("#player1runningTotal").text(player1.runningTotal);
    $("#player1score").text(player1.score);
  });
  //
  $("#hold").click(function (){
    player1.hold();
    $("#player1score").text(player1.score);
  });
});
