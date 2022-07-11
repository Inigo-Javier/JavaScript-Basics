// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const countString = (string = "") =>
    (!string || typeof string !== 'string')
        ? console.warn("No ingresaste ningun caracter o ingreasate un caracter erroneo.")
        : console.info(`LA cadena "${string}" tiene ${string.length} `)

countString("holaaa")
countString(2)
countString()



console.clear()




// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const scissorString = (word = "", num = undefined) =>
    (!word)
        ? console.warn("No ingresaste ningun caracter.")
        : (num === undefined)
            ? console.warn("No ingresaste ningun caracter.")
            : console.info(word.slice(0, num))



scissorString("hola mundo", 4)
scissorString()
scissorString("hola hola", "6")
scissorString("", 5)








// // 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// const arrayString = (word) => {
//     // const regex = /\s/gi;
//     // return word.match(regex)
//     const divisiones = word.split(" ");

//     return divisiones
// }
// console.log(arrayString('The quick It barked ok.'))

// // 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// const wordRepeat = (text, repeat) => {
//     return text.repeat(repeat)
// }
// console.log(wordRepeat("hola ", 3))
