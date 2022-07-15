// console.log("*****Arrow Functions***** ")
//         //nueva manera de simplificar las funciones expresadas(funciones anónimas).

//         const arrow = function () {
//             console.log("Hola, soy un arco expresado tradicional")
//         }

//         const arrowSimple = nombre => console.log(`Hola, soy un arco expresado simplificado y me llamo: ${nombre}`)

//         arrow()
//         arrowSimple("Irma")

//         // const sumar2 = function (a, b) {
//         //     return a + b
//         // }
//         // console.log(sumar2(1, 1))
//         //se puede simplificar como:nos ahorramos el return(está implícito)
//         const sumar2 = (a, b) => a + b
//         console.log(sumar2(10, 10))

//         const letras = ["a", "b", "c", "d", "e", "f", "g", "h"];

//         letras.forEach(function (elem, index) {
//             console.log(`el elemento: ${elem}, está en la posición :${index}`)
//         })
       


// console.log("-----------con arrow function------")

// letras.forEach((elem, index) => console.log(`${elem}, está en la posición :${index}`))

// //IMPORTANTE: LAS ARROW FUNCTIONS TIENEN LA CAPACIDAD DE CAPTURAR EL OBJETO "THIS" DEL CONTEXTO EN EL QUE SE ENCUENTREN.EJEMPLO:

// // function samurai() {
// //     console.log(this)
// // }
// //como la funcion existe dentro del contexto del navegador, this se refiere al objeto window.
// // samurai()

// const huno = {
//     nombre: "Atila",
//     tribu: "hunos",
//     gritar: function () {
//         console.log(`soy ${this.nombre} y con la function expresada tradicional me refiero al objeto:`, this)
//     },
//     status() {
//         console.log(`El rey de los ${this.tribu} soy YO:${this.nombre}aaaa!!!`)
//     },//forma de declarar métodos en objetos literales, igual al método anterior, pero más simplificado.
// }

// huno.gritar()//this en este contexto se refiere al objeto huno.
// huno.status()


// const huno2 = {
//     nombre: "Atila",
//     gritar: () => {
//         console.log(`soy ${huno2.nombre} y con la function expresada arrow me refiero al objeto:`, this)
//     },
// }

// huno2.gritar()//this en este contexto se refiere al objeto window.

// //HAY QUE TENER MUCHO CUIDADO CON UTILIZAR ARROW FUNCTIONS PARA DECLARAR MÉTODOS DENTRO DE OBJETOS LITERALES.UNA FUNCION NORMAL RESPETA EL CONTEXTO EN EL QUE SE ENCUENTRA.Utilizar function expresada tradicional(no arrow) para metodos de objetos literales.

