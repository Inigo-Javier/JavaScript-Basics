// console.log("*****Métodos estáticos, getters y setters*****")
//         //en JS todas la clases son públicas.

//         class Perro extends Animal {
//             constructor(nombre, genero, tamanio) {
//                 super(nombre, genero)
//                 this.tamanio = tamanio;
//                 this.raza = null //getter y setter modifican este valor.
//             }
//             sonar() {
//                 console.log("Piiiiiiiiiiiiiiiiiiiiii")
//             }
//             ladrar() {
//                 console.log("guaaaaaaaaaaaaaaaaaaaaaaaaaaauuuuuu")
//             }
//             static queEres() {
//                 console.log("Los perros somos los mejores amigos del hombre.")
//             }
//             //---setters y getters---, métodos especiales que permiten establecer y obtener valores de los atributos de nuestra clase.
//             get getRaza() {
//                 return this.raza
//             }
//             set setRaza(raza) {
//                 this.raza = raza
//             }
//             //son metodos, pero se utilizan como atributos.
//         }

//         //metodo estático se puede ejecutar sin necesidad de instaciar la clase.
//         Perro.queEres()

//         const mimi = new Animal("Mimi", "Hembra"),
//             scooby = new Perro("Scooby", "Macho", "Gigante")

//         console.log(mimi);
//         mimi.sonar()
//         mimi.saludar()
//         console.log(scooby);
//         scooby.sonar()
//         scooby.saludar()
//         scooby.ladrar()
//         console.log(scooby.getRaza)
//         scooby.setRaza = "BullDog"
//         console.log(scooby.getRaza)


//         const person = {
//             firstName: "Eneco",
//             lastName: "patxi",
//             get fullName() {
//                 return `${this.firstName} ${this.lastName}`
//             },
//             set fullName(value) {
//                 const parts = value.split(' ')
//                 this.firstName = parts[0]
//                 this.lastName = parts[1]
//             }
//         }

//         console.log(person.fullName)
//         person.fullName = 'María Fernandez'
//         console.log(person);