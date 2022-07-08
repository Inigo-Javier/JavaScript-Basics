export const PI = Math.PI

export const usuario = "Jordan"

const password = "password"
// export default password //forma de exportacion por defecto con const y let.

export const hello = () => console.log("Hello funcion expresada.")

export function saludar() {
    console.log("Hola funcion declarada->se puede invocar antes de declarar")
}
// cuando se llame esta funcion saludar se muestra en consola directamente.Sólo se puede utilizar una vez

export default class ClasePrueba {
    constructor() {
        console.log("clase de prueba para exportarla por defecto.")
    }
}