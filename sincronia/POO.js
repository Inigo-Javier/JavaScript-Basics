// console.log("*****Clases y Herencia******")

//         //las clases no reciben parámetros:
//         class Animal {
//             //método especial, se ejecuta en el mometo de instaciar la clase:
//             constructor(nombre, genero) {
//                 this.nombre = nombre
//                 this.genero = genero
//             }
//             sonar() {
//                 console.log("Soy un ser vivo y emito sonidos")
//             }

//             saludar() {
//                 console.log(`Hola me llamo ${this.nombre}`)
//             }
//         }

//         // const mimi = new Animal("Mimi", "Hembra"),
//             // scooby = new Animal("Scooby", "Macho")


//         console.log(mimi);
//         mimi.sonar()
//         mimi.saludar()

//         console.log(scooby);
//         scooby.sonar()
//         scooby.saludar()

//         // utilizamos el método super, que llama al constructor de una clase.

//         class Perro extends Animal {
//             constructor(nombre, genero, tamanio) {
//                 //metodo super() llama al constructor de la clase padre; Es este caso Animal.
//                 super(nombre, genero)
//                 //propiedad tamanio, exclusiva de la clase perro.
//                 this.tamanio = tamanio;
//             }
//             sonar() {
//                 console.log("Piiiiiiiiiiiiiiiiiiiiii")
//             }
//             ladrar() {
//                 console.log("guaaaaaaaaaaaaaaaaaaaaaaaaaaauuuuuu")
//             }
//         }


//         const mimi = new Animal("Mimi", "Hembra"),
//             scooby = new Perro("Scooby", "Macho", "Gigante")

//         console.log(mimi);
//         mimi.sonar()
//         mimi.saludar()

//         console.log(scooby);
//         scooby.sonar()
//         scooby.saludar()
//         scooby.ladrar()
