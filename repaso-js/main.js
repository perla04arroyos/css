// var nombre = "Perla";
// var altura = 150;

// var concat = nombre + " " + altura;

// document.write(concat);
// if(altura >= 190){
//     datos.innerHTML += '<h1>Eres una persona alta</h1>'
// }else{
//     datos.innerHTML += '<h1>Eres una persona baja</h1>'
// }

// for(var i = 2010; i <= 2020; i++){
//     datos.innerHTML += '<h2>Estamos en el año ' + i + '</h2>';
// }

function MuestraMiNombre(nombre, altura){
    var misDatos = '<h1> Hola, soy la caja de datos </h1><h2>Mi nombre es:' + nombre + '</h2><h3>Mi altura es: ' + altura + ' cm</h3>';

    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre('Perla Arroyos', 150);
}

imprimir();

var nombres = ["perla", "maria", "paola", "belen"];

// alert(nombres[2]);
document.write("<h1>Listado de nombres</h1>");
for(var i = 0; i < nombres.length; i++){
    document.write(nombres[i] + "<br/>");
}

document.write("<h1>Listado de nombres</h1>");
// nombres.forEach(function(nombre){
//     document.write(nombre + "<br/>");
// });
nombres.forEach((nombre) => {
    document.write(nombre + "<br/>");
});