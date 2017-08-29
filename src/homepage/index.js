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
    {
      user:{
        username: 'imagen1',
        avatar: 'http://materializecss.com/images/sample-1.jpg'
      },
      url:'http://materializecss.com/images/office.jpg',
      likes: 1000,
      liked: true
    },

    {
      user:{
        username: 'imagen1',
        avatar: 'http://materializecss.com/images/sample-1.jpg'
      },
      url:'http://materializecss.com/images/office.jpg',
      likes: 800,
      liked: true
    },
  ];
  empty(main).appendChild(template(pictures));

})
