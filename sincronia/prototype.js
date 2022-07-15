// console.log("*****Prototipos******")

// // const hoplita = {
// //     nombre: "Jasón",
// //     gritoDeGuerra() {
// //         console.log(`soy ${this.nombre} y lucho POR ESPARTAAAAAAA`)
// //     }
// // };

// // const hoplita2 = {
// //     nombre: "Carlos",
// //     gritoDeGuerra() {
// //         console.log(`soy ${this.nombre} y lucho POR ESPARTAAAAAAA`)
// //     }
// // };

// // hoplita.gritoDeGuerra()
// // hoplita2.gritoDeGuerra()
// // console.log(hoplita)
// // console.log(hoplita2)

// //para realizar un modelo que nos permita generar N hoplitas de manera rápida y eficiente.

// // //funcion constructora:
// // function Infante(nombre, rango) {
// //     //Atributos
// //     this.nombre = nombre;
// //     this.rango = rango;
// //     //métodos
// //     this.gritoDeGuerra = function () {
// //         console.log('lucho POR ESPARTAAAAAAA')
// //     }
// //     //metodos para objetos literales no aplican para funciones constructoras(this.grito()->NO).
// //     this.saludar = function () {
// //         console.log(`Hola me llamo ${this.nombre}`)
// //     }
// // }

// // const jason = new Infante("Jason", "soldado"),
// //     carlos = new Infante("Carlos", "veterano")

// // console.log(jason, carlos)

// // jason.gritoDeGuerra()
// // jason.saludar()

// // carlos.gritoDeGuerra()
// // carlos.saludar()
// //IMP: LAS FUNCIONES CONSTRUCTORAS SÓLO DEBEN CONTENER LOS ATRIBUTOS, PARA EVITAR DUPLICIDADES CON LOS MÉTODOS, COMO EL EJEMPLO ANTERIOR.

// //procedemos a sacar los métodos de la funcion constructora:
// //-----------funcion constructora:--------
// function Infante(nombre, rango) {
//     //Atributos
//     this.nombre = nombre;
//     this.rango = rango;
// }

// //Métodos agregados al prototipo de la funcion constructora:
// Infante.prototype.gritoDeGuerra = function () {
//     console.log('lucho POR ESPARTAAAAAAA')
// }
// //metodos para objetos literales no aplican para funciones constructoras(this.grito()->NO).
// Infante.prototype.saludar = function () {
//     console.log(`Hola me llamo ${this.nombre}`)
// }

// // const jason = new Infante("Jason", "soldado"),
// //     carlos = new Infante("Carlos", "veterano")

// // console.log(jason, carlos)

// // jason.gritoDeGuerra()
// // jason.saludar()

// // carlos.gritoDeGuerra()
// // carlos.saludar()

// console.log("*****Herencia Prototípica******")

// //herencia prototípica:

// function Hoplita(nombre, rango, tamanio) {
//     this.super = Infante;//invocamos constructor Infante.
//     this.super(nombre, rango);
//     this.tamanio = tamanio;
// }

// //asignar al prototipo de Hoplita, que sea una instancia(copia del modelo) de Infante.Por tanto:
// //Hoplita está heredando de Infante.
// Hoplita.prototype = new Infante();
// Hoplita.prototype.constructor = Hoplita;

// //Sobreescritura de método del Prototipo padre en el hijo.Redefinimos:

// Hoplita.prototype.gritoDeGuerra = function () {
//     console.log("Desperta ferro!!")
// }

// Hoplita.prototype.opinion = function () {
//     console.log("La guerra es un juego macabro")
// }

// const jason = new Hoplita("Jason", "soldado", "mediano"),
//     carlos = new Infante("Carlos", "veterano")

// console.log(jason)
// console.log(carlos)

// jason.gritoDeGuerra()
// jason.saludar()
// jason.opinion()


// carlos.gritoDeGuerra()
// carlos.saludar()

