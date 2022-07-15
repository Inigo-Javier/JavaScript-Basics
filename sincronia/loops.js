// console.log("***** ejemplo LOOPS*****")

//         // console.log("while:")
//         //estructura imperativa de programacion estructurada.

//         let contador = 0;
//         // contador < 10 ===> bucle infinito, hace falta incremento(++).
//         while (contador < 10) {
//             contador++
//             console.log("while", contador)
//         }


//         // console.log(" do while:")

//         do {
//             console.log(" do while", contador)
//             contador++
//         } while (contador < 10)


//         console.log("for:")

//         let ArrayNum = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"]

//         for (let i = 0; i < ArrayNum.length; i++) {
//             console.log(i, ArrayNum[i])
//         }


//         const PruevaObject = {
//             nombre: "ini",
//             apellido: "Malluki",
//             edad: 45
//         }
//         //for in para iterar las propiedades de un objeto primitivo
//         //si queremos imprimir el valor de la propiedad de un objeto , la notacion del punto nos dará undefined.
//         for (const propiedad in PruevaObject) {
//             console.log(`key:${propiedad}, value: ${PruevaObject[propiedad]}`)
//         }
//         //for of permite recorrer o iterar los elementos de cualquier objeto en JS que sea iterable(que se puedan partir en pequeños elementos: strings, arrays, numeros...).
//         for (const elemento of ArrayNum) {
//             console.log(elemento)
//         }
//         let cadena = "Hola Mundo"
//         for (const elemento of cadena) {
//             console.log(elemento)
//         }