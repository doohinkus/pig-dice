function Player (playerID){
  this.score = 0;
  this.runningTotal = 0;
  this.turn = 0;
  this.playerID = playerID;
}

function Referee (){
  this.players = [];
  this.winner = "";
  this.gameover = 0;
  this.dice = 0;
}


Referee.prototype.throw = function (){
  var result = Math.floor((Math.random() * 6) + 1);
  this.dice = result;
  if (this.players[0].turn === 1) {
    if (result !=1){
      this.players[0].runningTotal += result;
    }else {
      this.players[0].runningTotal = 0;
      this.players[0].turn = 0;
      this.players[1].turn = 1;
    }
  }else if (this.players[1].turn === 1) {
    if (result !=1){
      this.players[1].runningTotal += result;
    }else {
      this.players[1].runningTotal = 0;
      this.players[1].turn = 0;
      this.players[0].turn = 1;
    }
  }
}

Referee.prototype.hold = function (){
  if (this.players[0].turn === 1){
    this.players[0].turn = 0;
    this.players[0].total += this.players[0].runningTotal;
    this.players[1].turn = 1;
  } else if (this.players[1].turn === 1){
    this.players[1].turn = 0;
    this.players[1].total += this.players[1].runningTotal;
    this.players[0].turn = 1;
  }
}

Referee.prototype.pickPlayer = function (){
  this.players[0].turn = 1;
}





$(document).ready(function (){
  var player1 = new Player ();
  var player2 = new Player ();
  var jimmyTheReferee = new Referee ();
  jimmyTheReferee.players.push(player1, player2);
  jimmyTheReferee.pickPlayer();





  $("#roll").click(function (){
    jimmyTheReferee.throw();

    $("#dice").text(jimmyTheReferee.dice);
    console.log("player 2: ", player2.turn, "player 1: ", player1.turn);
    $("#player1RunningTotal").text(player1.runningTotal);
    $("#player2RunningTotal").text(player2.runningTotal);

  });

  //
  $("#hold").click(function (){
    jimmyTheReferee.hold();
  });
});
