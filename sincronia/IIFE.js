// console.log("*****Funciones Anónimas Autoejecutables*****");//importante los ; para que no interfiera en la funcion IIFE.
// //funcion(IIFE =Immediately Invoked Function Expression) en la que englobas todo el código que quieres ejecutar.
// //es la base de los módulos actuales.
// //está libre de efectos secundarios que pudiera tener la invocacion de librerías de terceros u otros mismos archivos de programación propios.

// (function () {
//     //código
//     console.log("Mi primer IIFE")
// })();//siempre acabar con punto y coma.

// (function (d, w, c) {
//     console.log("Mi segunda IIFE")
//     console.log(d)
//     console.log(w)
//     c.log("este es un console.log")
// })(document, window, console);

// //----------------------------------------------------
// //Formas de escribir las funciones IIFE:

// //Clasica:
// (function () {
//     console.log("versión IIFE clasica")
// })();

// //Formato Crockford (Autor de: JavaScript The Good Parts) creador del formato Json
// ((function () {
//     console.log("version Crockford---")
// })());


// //Unaria
// + function () {
//     console.log("version unaria")
// }();

// //Facebook

// !function () {
//     console.log("version facebook")
// }();