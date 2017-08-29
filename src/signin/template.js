var yo= require('yo-yo');
//es una variable que esta disponible en js para exportar
var landing= require('../landing');

var signinForm= yo`<div class="col s12 m7">
  <div class="row">
    <div class="signup-form">
      <form class="signup-form" action="index.html" method="post">
        <h2>Registro para ver fotos de amigos</h2>
        <div class="section">
          <a href="#" class="btn btn-fb hide-on-small-only">Iniciar sesion en Facebook</a>
          <a href="#" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official" aria-hidden="true"></i>Iniciar sesion</a>
        </div>
        <div class="divider">

        </div>
        <div class="section">
          <input type="text" name="username" placeholder="Nombre del usuario" value="">
          <input type="password" name="password" placeholder=" contraseña " value="">
          <button type="submit" class="btn waves-effect waves-light btn-signup" name="button">Inicia Sessión</button>
        </div>
      </form>
    </div>
  </div>
  <div class="row">
    <div class="login-box">
      ¿Tienes una cuenta?<a href="/signup">Registrate</a>
    </div>
  </div>`;
module.exports= landing(signinForm);
