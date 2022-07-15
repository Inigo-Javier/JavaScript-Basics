// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".


export const reversePhrase = word => {
    let reverseWord = ""
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord = reverseWord + word[i]
    }
    return console.log(reverseWord)
}




// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

export const repeatWord = (word = "", repeat = "") => {

    if (!word) return console.log("No has ingresado el texto")

    if (!repeat) return console.log("No has ingresado el patron a evaluar")

    let i = 0,
        counter = 0;

    while (i !== -1) {
        i = word.indexOf(repeat, i)
        if (i !== -1) {
            i++
            counter++
        }
    }
    return console.info(`La palabra ${repeat} se repite ${counter} veces `)
}






// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.


export const palindromo = (word = "") => {
    if (!word) return console.warn("No has ingresado el texto")

    word = word.toLowerCase()
    let backwards = ""

    for (let i = word.length - 1; i >= 0; i--) {
        backwards += word[i]
    }

    if (word === backwards) {
        return console.info(`${word}, es un palindromo`)
    } else {
        return console.warn(`${word}, NO es un palindromo`)
    }
}


// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

export const deletePatron = (text = "", patron = "") => (!text)
    ? console.warn("No has ingresado el texto")
    : (!patron)
        ? console.warn("No has ingresado el texto")
        : console.info(text.replace(new RegExp(patron, "gi"), ""))



