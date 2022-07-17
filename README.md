# Curso Básico de JavaScript



## Variables

JavaScript has 3 types of [scope](https://www.w3schools.com/js/js_scope.asp)
a parti de ES6: se añade los Block scope, con la palabra reservada `let` y `const`.

| Variable |  scope                  | Description                                        |
|----------|:------------------------|:--------------------------------------------------:|
|  `let`   |     Block scope         | variable sólo exite en bloque definido             |
|  `const` |     Block scope         | variable sólo exite en bloque definido             |
|  `var`   |     Function scope      | variable disponible como método del objeto window  |
|  `var`   |     Global scope        | variable disponible en objeto window               |


JavaScript [Hoisting](https://www.w3schools.com/js/js_hoisting.asp)



|Valores Primitivos |	EJEMPLO                |	Description                                                              |
|-------------------|:-------------------------|:---------------------------------------------------------------------------:|
|STRING             |let texto = "javascript"  |Cadenas de texto                                                             |
|NUMBER             |let numero = 4	           |Números                                                                      |
|BOOLEAN	          |let boolean= true         |Valores true o false                                                         |
|NULL               |let nulo = null           |representa la ausencia de valor(variable que no tiene valor).Variable que ha sido asignado intencionalmente.| 
|UNDEFINED          |let indefinido;           |representa la ausencia de valor(variable que no tiene valor).Variable que no ha sido inicializada.|
|NaN                |let NoNumero = "hello"*4.68|Representa algo que no es un numero.                                                                     |
                     



|Valores No Primitivos o Compuestos  |	Description                                                                        |
|------------------------------------|:------------------------------------------------------------------------------------|
|FUNCTION	                           |Bloque de código autocontenido(independiente al Global scope) y reutilizable         |
|OBJECT                              |Colección de keys-values.(variables => atributos/propiedades y funciones => métodos* |
|ARRAY                               |Referencia a valores primitivos                                                      |
|CLASS                               |	                                                                                   |
  *ejemplo es el método forEach(), perteneciente al objeto String.


|CREAR FUNCIONES	                   |	TIPOS                                          |	
|------------------------------------|:------------------------------------------------|
| funcion declarada                  |  function funcionDeclarada(){código}            |   
| funcion expresada(funcion anónima) |  const funcionExpresada = function()=>{código}* |            

*aplicando arrow function => const funcionExpresada = ()=> {código}

1. ORDENAMIETO DEL CÓDIGO(para evitar errores de compilación y evitar el hoisting de las funciones declaradas.)
    1. Importacion de módulos
    2. Declaracion de variables
    3. Declaracion de funciones
    4. Ejecución de código

`Nota`: JavaScript es un lenguaje orientado a objetos basado en prototipos. El POO es edulcorante sintáctico.Tras bambalinas el compilador tranforma la clase a una función prototipal.
El prototipo más primitivo es el `__proto__:object`

* En la POO, conceptos clave:
  * Clases -> modelo a seguir
  * Objetos -> Una instancia(copia de un modelo a segir) de una clase.Los objetos tienen dos facultades:
    * Atributos- características o propiedad del objeto(variables dentro del objeto).
    * Métodos- acciones que puede realizar un objeto(getElelmtById,console.log,etc...)



---

1. Procesamiento Single thread y Multi thread.
      1. Operaciones de CPU y Operaciones de Input/output.
      2. Operaciones Consurrentes y Paralelas.
        1. Concurrencia: Las tareas progresan al mismo tiempo. 
        2. Paralelismo:  Las tareas se ejecutan al unísono.
      3. Operaciones Bloqueantes y No Bloqueantes.
        1. Bloqueante: aquella que no devuelve el control a la aplicación hasta que termine toda su tarea.
        2. No Bloqueante: las operaciones se ejecutan y devuelven inmediatamente el control al hilo principal de la aplicación.No importando si han terminado o no.
      4. Operaciones Sincronas y Asíncronas;Se refieren a cuándo tendrá lugar la respuesta.
        1. O.Sincrono: 
        2. O.Asincrono: 
      
---
`Nota`: JavaScript trabaja bajo un modelo asíncrono y no bloqueante y tiene un loop de eventos implementados de un sólo hilo, Single thread, para operaciones de entrada y salida (I/O).Gracias a esto JS es áltament concurrente(), a pesar de que sea un lenguaje de un sólo hilo.

![imagen event loop](https://redberry.international/wp-content/uploads/2021/12/wrtzmt2ty03ksew7ehvx-768x384.jpeg "foto event loop en JavaScript")

`Imagen(diagrama)`: Las peticiones (REQUESTS) registran las funciones de tipo callback (JS tiene diferentes mecanismos para trabajar la asincronía, el principal son la funciones de tipo callback) depende de las peticiones que vayamos haciendo, por ejemplo acceso a los ficheros del sistema(File System--> en el navegasdor no tenemos acceso),consumo de una api, solicitar datos de una Database, hacer procesamiento, etc.

Las operaciones se van apilando y conforme estas terminan, regresan al event loop, que manda un mensaje o notificación(Trigger Callback) al ususario.
 
---

En la runtime de JS, hay un concepto denominado Call Stack, que apila las tareas, y dependiendo de si son asincronas o sincronas, se ejecutan.

JavaScript trabaja con filosofía lifo(last in first out) para la ejecución de las distintas tareas apiladas.

---



  
