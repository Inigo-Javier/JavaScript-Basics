import { countString, scissorString, arrayString, sentenceRepeat } from "./bloque-1.js"
import { reversePhrase, repeatWord, palindromo, deletePatron } from "./bloque-2.js"
import { randomNumber, getCapicua, factorial } from "./bloque-3.js"
import { primo } from "./bloque-4.js"


//------------------------------bloque de ejercicios 1:---------------------------
countString("holaaa")
countString(2)
countString()



console.clear()

scissorString("hola mundo", 4)
scissorString()
scissorString("hola hola", "6")
scissorString("", 5)



console.clear()



arrayString("Lorem ipsum amed", " ")
arrayString("Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic", ",")
arrayString()
arrayString("Hola Mundo")
arrayString("", "-")




console.clear()

sentenceRepeat("hola", 3)
sentenceRepeat("hola 2", 0)
sentenceRepeat("hola 3", -1)
sentenceRepeat("hola 4", 1)
sentenceRepeat("", 10)

console.clear()



//------------------------------bloque de ejercicios 2:---------------------------


reversePhrase("Hola Mundo")

console.clear()

repeatWord()
repeatWord("", "mundo")
repeatWord("hola mundo adios mundo")
repeatWord("hola mundo adios mundo yoyol mundo", "mundo")

console.clear()

palindromo("")
palindromo("Otto")
palindromo("Iñigo")
palindromo("Salas")
palindromo("jose")

console.clear()
deletePatron()
deletePatron("xyz1, xyz2, xyz3, xyz4 y xyz5")
deletePatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")


console.clear()



//------------------------------bloque de ejercicios 3:---------------------------

randomNumber()

console.clear()

getCapicua()
getCapicua({})
getCapicua("3")
getCapicua(5005)
getCapicua(10)
getCapicua(252.252)


console.clear()

factorial("-100")
factorial(-100)
factorial("10")
factorial(5)
factorial(0)
factorial()

console.clear()

//------------------------------bloque de ejercicios 4:---------------------------


// primo("1")
// primo(2)
// primo(-3)
// primo()
// primo(13)
// primo(5)
primo(15)

