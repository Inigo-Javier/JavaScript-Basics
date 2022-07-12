import { countString, scissorString, arrayString, sentenceRepeat } from "./bloque-1.js"
import { reversePhrase, repeatWord, palindromo } from "./bloque-2.js"


///------------------------------bloque de ejercicios 1:---------------------------
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

repeatWord("hola mundo adios mundo", "mundo")
repeatWord("hola mundo adios mundo", "mundo")

console.clear()

palindromo("Otto")
palindromo("Iñigo")
palindromo("Salas")