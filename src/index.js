//se creara la navegacion de paginas con page.js sin necesidad de recargar
var page= require('page');
//es importante la organizacion de las carpetas
require('./homepage');
require('./signup');
require('./signin');

/*
var yo= require("yo-yo");
var empty= require("empty-element");
var main = document.getElementById('main-container');
*/
/*
page('/', function(ctx, next){
  // que diga home
  main.innerHTML = '<a href="/signup">Signup</a>';
})*/

page();
