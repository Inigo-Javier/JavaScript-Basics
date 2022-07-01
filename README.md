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
|BOOLEAN	        |let boolean= true         |Valores true o false                                                         |
|NULL               |let nulo = null           |representa la ausencia de valor(variable que no tiene valor).Variable que ha sido asignado intencionalmente.| 
|UNDEFINED          |let indefinido;           |representa la ausencia de valor(variable que no tiene valor).Variable que no ha sido inicializada.|
|NaN                |let NoNumero = "hello"*4.68|Representa algo que no es un numero.                                                                     |
                     



|Valores No Primitivos o Compuestos  |	Description                                                               |
|------------------------------------|:---------------------------------------------------------------------------|
|FUNCTION	                         |Bloque de código autocontenido(independiente al Global scope) y reutilizable|
|OBJECT                              |	       	                                                                  |
|ARRAY                               |Referencia a valores primitivos                                             |
|CLASS                               |	                                                                          |



|CREAR FUNCIONES	                 |	TIPOS                                          |	
|------------------------------------|:------------------------------------------------|
| funcion declarada                  |  function funcionDeclarada(){código}            |   
| funcion expresada(funcion anónima) |  const funcionExpresada = function()=>{código}* |            

*aplicando arrow function => const funcionExpresada = ()=> {código}

1. ORDENAMIETO DEL CÓDIGO(para evitar errores de compilación,para evitar el hoisting de las funciones declaradas.)
    1. Importacion de módulos
    2. Declaracion de variables
    3. Declaracion de funciones
    4. Ejecución de código