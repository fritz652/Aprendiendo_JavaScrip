/* ::::SUMA:::: */
var suma = 7 + 12;
console.log(suma);

/* ::::RESTA:::: */

var resta = 15 - 5;
console.log(resta);

/* :::PRODUCTO:::: */

var producto =15 * 5;
console.log(producto);

/* ::::DIVISION:::: */

var cociente = 15 / 5;
console.log(cociente);


var cociente = 15/ 0;
console.log(cociente);/* ..............................todo numero dividido entre 0 en js te dara infinity */


/* :::NUMEROS DECIMALES:::: */
/* funcionan al igual que los numeros enteros */


/* ::::RESTO:::: */

var resto = 5 % 2;
console.log(resto);/* ............................respuesta  es 1 porque 5 / 2 = a 2 porque 2*2=4 5-4 = 1*/



/* :::::::::::::::::::::::::::::::::::::::::::: */
/* ::::::METODO PARA AMODIFICAR VARIABLE::::::: */
//aumentando  en 1............................
var librosComprados = 105;
console.log(librosComprados);

// Opcion 1
librosComprados = librosComprados + 1;
console.log(librosComprados);

// Opcion 2
librosComprados++; // esta opcion oslo sirve para incrementar en 1
console.log(librosComprados);

// disminuyendo en 1............................
var numeroDeEstudiantes = 256;
console.log(numeroDeEstudiantes);

//opcion 1
numeroDeEstudiantes = numeroDeEstudiantes - 1;
console.log(numeroDeEstudiantes);

//opcion 2
numeroDeEstudiantes--;
console.log(numeroDeEstudiantes);

//aumentando en mas de uno.......................
var a = 23;
a = a + 5;

console.log(a);

// otra forma:
var b = 23;
b += 5;
console.log(b);

// disminuyendo en mas de uno.....................
//opcion 1
var c = 23;
c = c - 3;
console.log(c);
//opcion 2
var c = 23;
c -= 3;
console.log(c);

//multiplicando....................................
//opcion 1
var x = 5;
x = x*5;
console.log(x);
//opcion 2
var x = 5;
x *= 5;
console.log(x);

//division.........................................
//

//opcion 1
var x = 20;
x = x / 5;
console.log(x);
//opcion 2
var x = 20;
x /= 5;
console.log(x);


/* ::::CADENAS  DE CARACTERES:::: */
// Cadenas
var miCadena = 'Soy una cadena de caracteres con "comillas"'
console.log(miCadena);

//concatenar caracteres:

//Opcion 1
var verbo = "programar";
mensaje = "Yo estoy aprendiendo a" + " " + verbo
console.log(mensaje);

//Opcion 2
var verbo = "Programar";
mensaje = "Yo también estoy aprendiendo a ";

mensaje += verbo;
console.log(mensaje);


/* ::::::::::::::LONGITUD DE UNA CADENA DE DATOS::::::::::::::::::::::::: */
var miCadena;
 miCadena = "Fritz";
 console.log(miCadena.length);/* ................length sirve apra contar el numero de caracteres*/