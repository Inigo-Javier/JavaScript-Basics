function cuadradoPromise(value) {
    if (typeof value !== "number") {
        return Promise.reject(`Error, el valor "${value}" ingresado no es un número`)
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            })
        }, 0 | Math.random() * 1000);
    })
}
//Métodos resolve y reject son estáticos.No necesitan crear una instancia para poder utilizarlos ().
//NOTA: el setTimeout nos permite simular una petición a un recursos externo y manejar la asincronía.

cuadradoPromise(0)
    .then(obj => {
        console.log("inicio Promise")
        console.log(`${obj.value} ${obj.result}`)
        return cuadradoPromise(1)
    })
    .then(obj => {
        console.log(`${obj.value} ${obj.result}`)
        return cuadradoPromise(2)
    })
    .then(obj => {
        console.log(`${obj.value} ${obj.result}`)
        return cuadradoPromise("3") //simulando error.
    })
    .then(obj => {
        console.log(`${obj.value} ${obj.result}`)
        return cuadradoPromise(4)
    })
    .then(obj => {
        console.log(`${obj.value} ${obj.result}`)
        return cuadradoPromise(5)
    })
    .then(obj => {
        console.log(`${obj.value} ${obj.result}`)
        return cuadradoPromise(6)
    })
    .then(obj => {
        console.log(`${obj.value} ${obj.result}`)
        console.log("Fin Promise")
    })
    .catch(err => console.error(err))