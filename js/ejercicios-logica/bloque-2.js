// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".


export const reversePhrase = word => {
    let reverseWord = ""
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord = reverseWord + word[i]
    }
    console.log(reverseWord)
}




// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

export const repeatWord = (word, repeat) => {
    const regex = /mundo/gi
    console.log(word.match(regex))

}






// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.


export const palindromo = (word) => {

    let a = ""

    for (let i = word.length - 1; i >= 0; i--) {
        a = a + word[i]
    }


    if (word.toLowerCase() === a.toLowerCase()) {
        console.info(`${word}, es un palindromo`)
    } else {
        console.warn(`${word},NO es un palindromo`)
    }

}


// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.



