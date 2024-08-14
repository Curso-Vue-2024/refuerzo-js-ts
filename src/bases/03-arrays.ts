// --------------------
// Arrays en Typescript
// --------------------

// Si te fijas, hasta ahora en los archivos anteriores no hemos usado código de Typescript.
// Javascript se ejecuta sin problemas en Typescript, que , podemos decir, que es un superset
// de Javascript. De hecho, el código de Typescrupt es traducido a Javascript para que los
// navegadores lo entiendan. Lo bueno que tiene Typescrip frente a Javascript es que nos
// ayuda a programar usando cosas como el tipado estricto, la creación de interfaces, la
// definición de objetos complejos y más cosas que iremos viendo.

// Definamos nuestro primer array.
// Un array es una variable estructurada que almacena valores de forma consecutiva en memoria.

// Export indica que lo que viene detrás se puede usar en otro módulo en el que importemos este.
export const numberArray = [1, 2, 3, 4, 5];
// Si dejas el cursor sobre la palabra numberArray verás que Typescript te dice que es un array de númber.

// Para insertar un nuevo valor en el array usamos el método push():
numberArray.push(6);

// Ya sabes como importar este módulo en el main.ts para porder ver la salida por consola:
console.log(numberArray);

// Observa la salida. El primer elemento del array ocupa la posicion 0, y así accedemos a él:
console.log("El primmer elemento del array es:", numberArray[0]);

// Sabemos la longitud del array con la propiedad length:
console.log("La longitud del array es:", numberArray.length);

// Podemos acceder al último elemento del array de dos forma:
console.log("El último elemento del array es:", numberArray.length);

// Se puede usar el operador ... (spread) para esparcir los valores en un nuevo array. Si hacemos una copia literal
// tendremos el acceso al mismo espacio de memoria, por lo que los cambios que se hagan en la copia se
// harán también en el original.

const array2 = [...numberArray];
array2.push(7);
console.log({ numberArray, array2 });

// ¿Qué pasa su quiero añadir un string a uno de los arrays?
array2.push("8");
// Typescript nos informa de un error, el array2 es un array que contiene números y le queremos añadir
// un string, eso no se debe hacer.
console.log(array2);
// Observa la salida por consola, lo ha añadido. ¿Qué pasó?
// Javascript sí lo permite, y eso puede ser un problema en nuestro programa. Por eso Typescript avisa
// que no se puede, pero al transpilar el código a Javascript se lo traga como si nada.
// A la hora de construir el build de producción daría un error y no lo construiría, ya que antes tiene que
// pasar las validaciones de Typescript.

// Si por necesidades de nuestro código tenemos que crear arrays mixtos con números y cadenas de
// caracteres, podemos indicarlo de esta forma:
// Indicamos entre paréntesis los tipos que deseamos que tenga, separados por un pipe (|) y después de los
// paréntesis indicamos que es un array con los corchetes [].
const array3: (number | string)[] = [1, "2", 3, 4];
array3.push("Cualquier cosa");

console.log(array3);
// Puedes observar la salida en consola del navegador que admite ambos tipos.

// Pon la palabra export antes del const de numberArray para poder usarlo en otro módulo.
