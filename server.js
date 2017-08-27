var express = require('express'); //con require se buscara express dentro de nodemodules
var app= express();
// definiremos la ruta
app.get('/', function(req, res){
  res.send('hola');
})

app.listen(3000, function(err){
  if(err) return console.log("hubo un error"), process.exit(1);
    console.log("platzigram escuchando puerto 3000");

})
