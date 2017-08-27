var express = require('express'); //con require se buscara express dentro de nodemodules
var app= express();
//para ver se utilizara pug
app.set('view engine', 'pug');

//para que cualquier usuario pueda acceder a el
app.use(express.static('public'));
// definiremos la ruta
app.get('/', function(req, res){
  //res.send('hola');
  //.render quiere decir que llamara el punto de vista
  res.render('index')
})

app.get('/signup', function(req, res){
    res.render('index')
})
app.get('/signin', function(req, res){
    res.render('index')
})

app.listen(3000, function(err){
  if(err) return console.log("hubo un error"), process.exit(1);
    console.log("platzigram escuchando puerto 3000");

})
