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
  if(this.gameover === 0){
    this.dice = result;
  }
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
    this.players[0].score += this.players[0].runningTotal;
    this.players[0].runningTotal = 0;
    this.players[1].turn = 1;
  } else if (this.players[1].turn === 1){
    this.players[1].turn = 0;
    this.players[1].score += this.players[1].runningTotal;
    this.players[1].runningTotal = 0;
    this.players[0].turn = 1;
  }
}

Referee.prototype.pickPlayer = function (){
  this.players[0].turn = 1;
}
Referee.prototype.checkGame = function (){
  if (this.players[0].score >= 100){
    this.players[1].turn = 0;
    this.players[0].turn = 0;
    this.winner = "Player 1 ";;
    this.gameover = 1;
  }else if (this.players[1].score >= 100){
    this.players[1].turn = 0;
    this.players[0].turn = 0;
    this.winner = "Player 2 ";
    this.gameover = 1;
  }
}

//interface functions
function switchClass(player1, player2){
  if (player1.turn === 1){
    $("div.player1").addClass("highlight");
    $("div.player2").removeClass("highlight");
  }else if (player2.turn === 1){
    $("div.player1").removeClass("highlight");
    $("div.player2").addClass("highlight");
  }
}

function showScore(player1, player2){
  $("#player1RunningTotal").text("Running Total: " + player1.runningTotal);
  $("#player2RunningTotal").text("Running Total: " + player2.runningTotal);

  $("#player1Total").text("Total: " + player1.score);
  $("#player2Total").text("Total: " + player2.score);
}

function showDice (dice){
  $("img").attr("src","img/" + dice + ".png").hide().slideDown();
}



$(document).ready(function (){
  var player1 = new Player ();
  var player2 = new Player ();
  var jimmyTheReferee = new Referee ();
  jimmyTheReferee.players.push(player1, player2);
  jimmyTheReferee.pickPlayer();


  $("#roll").click(function (){
    jimmyTheReferee.checkGame();
    jimmyTheReferee.throw();


    showDice(jimmyTheReferee.dice);
    showScore(player1, player2);
    switchClass(player1, player2);

    if (jimmyTheReferee.gameover === 1){
      $("#winner").show().text(jimmyTheReferee.winner + "wins!!!");
    }


  });

  $("#hold").click(function (){
    jimmyTheReferee.checkGame();
    jimmyTheReferee.hold();
    switchClass(player1, player2);
    showScore(player1, player2);
  });
});
