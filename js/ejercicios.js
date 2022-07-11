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






console.clear()



// // 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const arrayString = (word = "", space = undefined) =>
    (!word)
        ? console.warn("No ingresaste una cadena de texto-1er warn.")
        : (space === undefined)
            ? console.warn("No ingresaste una cadena de texto-2º warn.")
            : console.info(word.split(space))



arrayString("Lorem ipsum amed", " ")
arrayString("Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic", ",")
arrayString()
arrayString("Hola Mundo")
arrayString("", "-")




console.clear()



// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const sentenceRepeat = (text = "", repeat = undefined) => {
    if (!text) console.warn("No ingrasaste texto")

    if (repeat === undefined) console.log("No ingresasrte el numero de repeticipones")

    if (repeat === 0) console.error("El numero de veces no puede ser 0")

    if (Math.sign(repeat) === -1) console.error("No puedes introducir valores negativos")

    for (let i = 1; i <= repeat; i++) console.info(`${text}, ${i}`)
}


sentenceRepeat("hola", 3)
sentenceRepeat("hola 2", 0)
sentenceRepeat("hola 3", -1)
sentenceRepeat("hola 4", 1)
sentenceRepeat("", 10)

console.clear()







