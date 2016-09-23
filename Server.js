//console.log("Hola Mundo");
//modulo http para poder utilizar request
var http =require("http");
//modulo para poder utilizar el index.html
var fs = require("fs");
//variable para decirle que archivo sera el que utilice
//var html= fs.readFileSync("./index.html");
http.createServer(function(req, res){
  fs.readFile("./index.html", function(err,html){//->function (error,html) este es llamado callback.
    var htmlToString = html.toString(); //hacer que nuestros elementos esten guardados en esta variable.
    var variables = htmlToString.match(/[^\{\}]+(?=\})/g);
    console.log(variables);
    var nombre ="Javier";
    var apellido="Cruz";

    for(variable of variables){
      var valor = eval(variable);
      //htmlToString = htmlToString.replace("{" + variable + "}", valor);
      htmlToString = htmlToString.replace(`{${variable}}`,valor);
    }
    res.write(htmlToString);
    res.writeHeader(200,{"Content-Type":"text/html"}); //especificar el codigo y el tipo de documento
    res.end();
    });
}).listen(8080);
