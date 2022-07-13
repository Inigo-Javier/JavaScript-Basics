// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

export const randomNumber = () => console.info(Math.round(Math.random() * (600 - 501) + 501))



// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.


export const getCapicua = (number = 0) => {

    if (!number) return console.warn("No ingresaste un numero")

    if (typeof number !== 'number') return console.error(`EL valor ${number} , no es un numero`)

    number = number.toString()

    let reverseNumber = number.split("").reverse().join("")

    // console.log(typeof reverseNumber)
    // console.log(typeof number)

    number = parseFloat(number)
    reverseNumber = parseFloat(reverseNumber)

    // console.log(typeof number)
    // console.log(typeof reverseNumber)

    return (number === reverseNumber)
        ? console.info(`Sí es capicúa, Numero original: ${number}, numero al revés ${reverseNumber}`)
        : console.info(`No es capicúa, Numero original: ${number}, numero al revés ${reverseNumber}`)

}


// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

export const factorial =()=>{
    console.log("factorial")
}