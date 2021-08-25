/* alert('Hola mundo');

var nombre = "Nicolas Sampini";
var altura = 174;

var concatenacion = nombre + " " + altura;
document.write(concatenacion);


var datos = document.getElementById("datos");
datos.innerHTML = concatenacion;

if (altura >= 174) {
    datos.innerHTML += '<h1> Eres una persona alta</h1>';
}

for (var i = 2000; i <= 2020; i++) {
    datos.innerHTML += "<h2>Estamos en el año" + i; ///Si agrego <h2> solo, concatena y luego siguie en la proxima abajo.
}

function MuestraNombre() {
    var datos = document.getElementById("datos");
    datos.innerHTML = "Hola soy Nicolas Sampini, estoy estudiando programacion";
}
MuestraNombre(); */

var nombres = ['Nicolas', 'Jorge', 'Marcos'];
alert(nombres[1]);

nombres.forEach(function(nombre) {

    document.write(nombre + '<br/>');

});