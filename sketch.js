var canvas, backgroundImage, playerCount, database;
var gameState = 0;
var form, player, game;

function setup () {
  canvas = createCanvas (400,400);
  database = firebase.database();
}

function draw() {
  game = new Game ();
  game.getState ();
  game.start();
}