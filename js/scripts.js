function Player (playerID){
  this.score = 0;
  this.runningTotal = 0;
  this.dice = 0;
  this.turn = 0;
  this.playerID = playerID;
}
function Referee (){
  this.players = [];
  this.winner = "";
}
//players object?

Player.prototype.throw = function (){
  var result = Math.floor((Math.random() * 6) + 1);
  return  result;
}

Player.prototype.hold = function (){
  this.turn = 0;
  this.total += this.runningTotal;
  return this.total;
}

Referee.prototype.pickPlayer = function (){
  this.players[0].turn = 1;
}

Referee.prototype.calculateRunningTotal = function (player){
  if (player.dice !=1 && player.turn === 1){
    player.runningTotal += player.dice;
  }else if (player.dice === 1){
    player.runningTotal = 0;
  }
  if (player.runningTotal >=100){
    this.winner = player.ID;
  }
  return player.runningTotal;
}

Referee.prototype.switchPlayers = function (playera, playerb){
  if (playera.turn === 1){
    playera.turn = 0;
    playerb.turn = 1;
  }else{
    playerb.turn = 0;
    playera.turn = 1;
  }
}


$(document).ready(function (){
  var player1 = new Player ();
  var player2 = new Player ();
  var jimmyTheReferee = new Referee ();

  jimmyTheReferee.players.push(player1, player2);



  $("#roll").click(function (){

  });

  //
  $("#hold").click(function (){

  });
});
