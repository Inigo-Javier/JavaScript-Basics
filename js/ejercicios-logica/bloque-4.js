// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.


export const primo = (number = undefined) => {

    if (number === undefined) return console.warn("no ingresaste un numero")

    // console.log(typeof number)
    number = parseFloat(number)
    // console.log(typeof number)

    if (number === 0) return console.error("El numero no puede ser 0")

    if (number === 1) return console.error("El numero no puede ser 1")

    if (Math.sign(number) === -1) return console.error("El numero no puede ser negativo")

    let divisible = false

    for (let i = 2; i < number; i++) {
        if ((number % i) === 0) {
            divisible = true
            break;
        }
    }
    console.log(divisible)
    return (divisible)
        ? console.log(`El numero ${number} No es primo`)
        : console.log(`El numero ${number} Sí es primo`)

}

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.




// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.