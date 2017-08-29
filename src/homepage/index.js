/*
var page= require('page');

page('/', function(ctx, next){
  // que diga home
  var main = document.getElementById('main-container');

  main.innerHTML = '<a href="/signup">Signup</a>';
})*/

var page= require('page');
var empty= require("empty-element");
var template= require('./template');
var title= require('title');


page('/', function(ctx, next){
  title('Platzigram');
  var main = document.getElementById('main-container');
  var pictures=[
    1,2,3,4,5
  ];
  empty(main).appendChild(template(pictures));

})
