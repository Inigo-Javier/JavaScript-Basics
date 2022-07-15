// console.log("*****Operador de Cortocircuito*****")
//         //operadores lógicos AND & OR

//         //Cortocircuito OR -cuando el valor de la izquierda en la expresión siempre pueda validad a TRUE, es el valor que se cargará por defecto.

//         //Cortocircuito AND -cuando el valor de la izquierda en la expresión siempre pueda validad a FALSE, es el valor que se cargará por defecto.

//         function salute(nombre) {
//             nombre = nombre || "Desconocido"
//             console.log(`Hola ${nombre}`)
//         }

//         salute("Javier")
//         salute()
//         //truthy OR
//         let cortocircuito = "cadena" || "Valor de la derecha"
//         let cortocircuito2 = 19 || "Valor de la derecha"
//         let cortocircuito3 = true || "Valor de la derecha"
//         let cortocircuito4 = [] || "Valor de la derecha"
//         let cortocircuito5 = {} || "Valor de la derecha"
//         //falsy: OR
//         let cortocircuito6 = 0 || "Valor de la derecha"
//         let cortocircuito7 = '' || "Valor de la derecha"
//         let cortocircuito8 = null || "Valor de la derecha"


//         console.log(cortocircuito)
//         console.log(cortocircuito2)
//         console.log(cortocircuito3)
//         console.log(cortocircuito4)
//         console.log(cortocircuito5)
//         console.log(cortocircuito6)
//         console.log(cortocircuito7)
//         console.log(cortocircuito8);

//         //falsy: AND
//         let cortocircuito10 = '' && "Valor de la derecha"
//         let cortocircuito9 = 0 && "Valor de la derecha"
//         let cortocircuito11 = null && "Valor de la derecha"
//         let cortocircuito12 = false && "Valor de la derecha"

//         //truthy OR
//         let cortocircuito13 = "cadena con AND" && "Valor de la derecha"
//         let cortocircuito14 = 19 && "Valor de la derecha"
//         let cortocircuito15 = true && "Valor de la derecha"
//         let cortocircuito16 = [] && "Valor de la derecha"
//         let cortocircuito17 = {} && "Valor de la derecha"

//         console.log(cortocircuito9)
//         console.log(cortocircuito10)
//         console.log(cortocircuito11);
//         console.log(cortocircuito12);
//         console.log(cortocircuito13);
//         console.log(cortocircuito14);
//         console.log(cortocircuito15);
//         console.log(cortocircuito16);
//         console.log(cortocircuito17);

//         console.clear()