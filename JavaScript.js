/* CURSO : https://www.youtube.com/watch?v=ivdTnPl1ND0&t=4749s */

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
 console.log(miCadena.length);/* ................length sirve paracontar el numero de caracteres*/

 /* ::::::::::::::: NOTACION DE CORCHETES::::::::::::::::::::::::::::::::: */

 //.......Primer caracter:
 var lenguajeDeProgramacion = "JavaScript";

 /* 
 Cadena:   J a v a S c r i p t
 Índices:  0 1 2 3 4 5 6 7 8 9
 */

 console.log(lenguajeDeProgramacion[0]);

 //.........Inmutabilidad de Cadena de Caracteres..............

 var miCadena = "Jola, Mundo";

 console.log(miCadena);

 miCadena[0] = "H"; //Error, porque los caracteres son inmutables.
 //.......

 miCadena = "Hola, Mundo";
 console.log(miCadena);//....lo que si sepuede hacer es cambiar toda la cadena.


//..........caracteres:

var miCadena= "JavaScript";

/* 
Cadena:   J a v a S c r i p t
Índices:  0 1 2 3 4 5 6 7 8 9
*/

console.log(miCadena[0]);//J
console.log(miCadena[1]);//a
console.log(miCadena[2]);//v
console.log(miCadena[3]);//a
console.log(miCadena[4]);//S
console.log(miCadena[5]);//c
console.log(miCadena[6]);//r
console.log(miCadena[7]);//i
console.log(miCadena[8]);//p
console.log(miCadena[9]);//t

console.log(miCadena[10]);//?



//..........Ultimo Caracter.............

var miCadena;
/* El último índice siempre es longitud - 1 porque comenzamos
a contar desde 0.

miCadena.length para "JavaScript" es 10.
El ultimo indice es 9.

Cadena:   J a v a S c r i p t
Índices:  0 1 2 3 4 5 6 7 8 9
*/

miCadena = "JavaScript";

console.log(miCadena[miCadena.length - 1]);


//.....Notacion de caracteres de derecha aizquierda

var miCadena;

/* el último índice es longitud -2 porque comenzamos
a contar desde 0.

miCadena.length es 10. el úlytimo índice es 8.

Cadena:   J a v a S c r i p t
Índices:  0 1 2 3 4 5 6 7 8 9
 */

miCadena = "JavaScript";
n = 2;

console.log(miCadena[miCadena.length - n]);

n = 3;

console.log(miCadena[miCadena.length - n]);

