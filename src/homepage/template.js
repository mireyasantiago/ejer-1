var yo= require('yo-yo');
var layout= require('../layout');
var picture=require('../picture-card');

module.exports= function(pictures){
 var el= yo`<div class="container timeline">
    <div class="row">
      <div class="col s12 m10 offset-m1 l6 oofset-l3">
        ${pictures.map(function(pic){
          //map nos devolvera un arreglo
          return picture;
        })}
      </div>
    </div>
  </div>`;

  return layout(el);
}



/*
var template= yo`<nav class="header">
  <div class="nav-warpper">
    <div class="container">
      <div class="row">
        <div class="col s12 m6 offset-m1">
          <a href="/" class="brand-logo platzigram">Platzigram</a>
        </div>
        <div class="col s2 m6 push-m10">
          <a href="#" class="btn btn-large btn-flat dropdown-button" data-activates="drop-user">
            <i class="fa fa-user" aria-hidden="true"></i>
          </a>
          <ul id="drop-user" class="dropdown-content">
           <li><a href="#">Salir</a></li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</nav>`;

module.exports= template;
*/
