// ----------------------
// Variables y constantes
// ----------------------

// En typescript no se usa var
// var firstName = 'Tony';

// Uso de let
// Let crea una variable que puede cambiar en el tiempo.
let firstName = "Tony"; // establece el valor 'Tony' a la variable firsName

// Descomenta la línea siguiente y observa lo que ocurre.
// firstName = 'Fernando'; // cambia el valor de la vaiable fisrtName por 'Fernando'

// Uso de const
// Const crea una constanta cuyo valor es constante
const secondName = "Elgordo"; // Establece el valor de 'Elgordo' a la constante secondName

// Descomenta la linea siguiente y observa lo que ocurre.
//secondName = 'Herrera'; // Typescript marca error ya que no se puede cambiar el valor de una constante

// Se aconseja usar const siempre excepto que el programador sepa que pueda producirse un
// cambio en el valor, para lo que se puede usar let.
// Como norma general, usar siempre const y cambiar a let si fuese necesario.

// Podemos mostrar por la consola del navegador web (herramientas de desarrollo)
// lo que hay en nuestras

// Para poder ver esto, es necesario poder ejecutar este programa desde el maun.ts.
// Abre el main.ts y pon el contenido de la línea siguiente en la anterior a la palabra 'document'
// import './bases/01-const-let'

console.log(firstName, secondName);

// Plantilla literal, Literal Template o backticks
// Se usan las plantillas literales para definir una cadena incluyendo constantes y/o
// expresiones que realizan cálculos:

console.log(
  `El mafioso de la serie Los Simson es "${firstName} ${secondName}"`
);
// Esto mostrará por la consola 'El mafioso de la serie Los Simmson es "Tony Elgordo".
// Observa que la plantilla literar usa el caracter ` al inicio y fin de la cadena.
// Observa que se han incluído unas comillasdobles " para enfatizar el nombre del mafioso.
// Observa que las constantes se indican dentro de la estructura ${} sin más.

// Mira este ejemplo:
const importeDeuda = 10000;
console.log(
  `Homer Simpson le debía $${importeDeuda} a ${firstName} ${secondName}`
);
// Observa que se ha puesto a propósito el simbolo de moneda $ delante del valor.
// La salida de una plantilla literal es siempre un 'string' o cadena de caracteres.

// También podemos hacer una operación matemática:
console.log(
  `El impuesto del dinero que debía homer era $${(importeDeuda * 15) / 100}`
);
// Si, se ha vuelto a incluir el símbolo de moneda $.
// Haz algunas pruebas por tu cuenta.

// Podemos crear una plantilla literal en una constante y que cambie según otros valores.
// Voy a poner aquí un bucle para el ejemplo. Los bucles los veremos un poco
// más adelante, detalladamente.
for (let index = 0; index < 10; index++) {
  const valorMultiplicado = `EL resultado de multiplicar ${index}x${5} es ${
    index * 5
  }`;
  console.log(valorMultiplicado);
}
