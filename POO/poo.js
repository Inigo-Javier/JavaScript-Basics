// abastraccion,encapsulamiento,herenciay polimorfismo

let content = document.getElementById('root')

const ulElement = document.createElement('ul')
content.appendChild(ulElement)

ulElement.innerHTML = `<li>Abstraccion</li>
                        <li>Encapsulamiento</li>
                        <li>Herencia</li>
                        <li>Polimorfismo</li>`

console.log(content)
console.log(ulElement)