

let content = document.getElementById('root')

const ulElement = document.createElement('ul')
content.appendChild(ulElement)

ulElement.innerHTML = `<li>Abstraccion</li>
                        <li>Encapsulamiento</li>
                        <li>Herencia</li>
                        <li>Polimorfismo</li>`

// console.log(content)
// console.log(ulElement)


// Clase: no retorna nada,sólo contiene variables y funciones.


class Book {
    #price
    constructor(a, b, c) {
        this.title = a
        this.author = b
        this.#price = c
    }
    //permite acceder(solo lectura) a la variable privada 'price' 
    get price() {
        return this.#price
    }
    //permite modificar la variable privada
    set price(new_price) {
        this.#price = new_price
    }


}


const book = new Book('1989', 'G.O', 350)
console.log(book)

book.price = 0

console.log(book.price)






// console.log(book.private)




