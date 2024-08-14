// -----------------------
// Funciones en Typescript
// -----------------------

// Documentación de Javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

// Una función es un grupo de instrucciones de código que realiza alguna operación.
// La función puede o no tener parámetros de entrada y también puede o no devolver algo.
// La particularidad de una función es que puede ser reutilizada muchas veces.

// La forma clásica de definir una función es así:
function greetPerson_any(name) {
  return `Hello, ${name}`;
}

// El error que nos muestra Typescript es que no hemos indicado de que tipo de dato es name.
// Por defecto le indica que es de tipo any (cualquier cosa). Eso es algo que debemos evitar al
// construir funciones, clases y cualquier variable. Tenemos que indicar el tipo de dato que
// va a recibir.
// Definamos la función correctamente:
// (voy a cambiarle el nombre a la primera para no perderla y dejarla como ejemplo)
function greetPerson(name: string) {
  return `Hello, ${name}`;
}
// Ahora le hemos indicado que el parámetro name riene que recibir un string (cadena de caracteres).
// La función, así, recién definida no hace nada, hay que llamarla para que ejecute el saludo.
// Cambia la importación del main.ts para usar este archivo, igual que en las anteriores.

// Ahora vamos a llamar a la función:
console.log(greetPerson("Jose Alfonso"));
// Observa la salida por la consola del navegador.

// Podemos saludar a quien queramos:
console.log(greetPerson("Peter"));

// Tenemos que hacerlo usando console.log(), pero pronto lo veremos dentro de nuestra aplicación.

// Vamos a intentar enviar un múmero a nuestra función:
console.log(greetPerson(125));
// Typescrip nos muestra un error y nos dice que un number no puede ser asignado a un string.
// Pero si miramos la consola del navegador, vemos que ahí está.
// Esto ocurre por lo mismo que comentamos antes en los arrays, Javascript lo permite y en desarrollo no se está
// usando el modo estricto de Typescript. Si intentamos crear el bundle de producción, Typescript nos tirará un error
// y no contruirá la aplicación.

// La forma actual de definir una función es como 'una función de flecha'.
// Se hace como si fuese una asignación, mira el siguiente código:

const giveMeYourDogName = (dogName: string) => {
  return `Your dog's name is ${dogName}`;
};

// Usemos la 'función de flecha':
console.log(giveMeYourDogName("Chamán"));
// Mira la consola del navegador y verás que funciona igual que la otra.

// Las funciones de flecha se pueden escribir de forma corta cuando solo ejecutan una línea de código:
const giveMeYourCatName = (catName: string) => `Your cat's name is ${catName}`;
// Se recomienda el uso de esta forma cuando la función sea fácil de leer.

console.log(giveMeYourCatName("Silvester"));

// Veamos este código:
const getUser = () => {
  return {
    uuid: "123asd56",
    userName: "Tony123",
  };
};
// Esta función no recibe parámetros y retorna un objeto.
// Observa lo que se muestra en la consila del navegador:
console.log(getUser());

// La función puede retornar un objeto de forma implícita, como antes con giveMeYourCatName:

const getUserImplicit = () => ({
  uuid: "123asd56",
  userName: "Tony123",
});
// Observa los paréntesis y las llaves. Los paréntesis envuelven el objeto que retorna la función:
console.log(getUserImplicit());
// Funciona igual que lo anterior, nos ahorramos poner el return y ahorramos algo de código.
// Si tu función se lee fácil, adelante, usa la forma implícita. Si tienes dudas usa la forma
// normal de función de flecha.

// Veamos como se comporta Typescript con arrays y funciones:
const heroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
    // power: 'Super fuerza y vision RX'
  },
];

// Deja el cursor del ratón sobre la palabra heroes y observa que Typescript nos indica que
// heroes es un array que contiene objetos con las propiedades id y name.

// Quita el comentario de la palabra power y vuelve a dejar el cursor del ratón sobre la palabara heroes.
// Observa que ahora nos indica que heroes es un array de objetos, uno que lleva power con un ?
// indicando que es una propiedad opcional u que su valor es undefined (no definido) y, separado por un pipe (|), otro objeto que lleva la
// propiedad power como una cadena de caracteres obligatoria.

// Busquemos en el array el héroe con le id 1. Para eso se usa el método find() de los arrays.
const hero = heroes.find((h) => h.id === 1);
// Observe que para hacer la comparación se usan ===.
// find() se va a recorrer todos los elementos del array, en (h) tenemos el elemento actual y
// en la función implícita hacemos la comparación del id actual con 1, si coinciden devuelve
// el resultado y deha de recorrer el array,
// Otra forma de escribir esta función es:
/*
const hero = heroes.find((h) => {
  return h.id === 1;
});
*/
console.log(hero);
// Mira el resultado en la consola del navegador. ¡Podemos hacer búsquedas en los arrays!.

// Observa esta expresión. No tenemos el id 3 en nuestro array.
// ¿Qué crees que devolverá Typescrip?
// No se observa ningún error.
const hero2 = heroes.find((h) => h.id === 3);

// Vamos a verlo en la consola del navegador:
console.log(hero2);

// Devuelve undefined, ¿que pasaría si intentamos imprimir el nombre del héroe?
console.log(hero2.name);
// Typescrip nos advierte que hero2 puede ser un undefined, y si intentamos imprimir
// la propiedad name, tendremos un undefined que no es cómodo de usar.
// Tenemos en operador ? que evalúa si lo que viene es undefined o null, en caso de ser así, ignora
// el comando y si no lo es, lo ejecuta.

console.log(hero2?.name);
// No nos advierte del error y en la consola del navegador no aparece nada.

// Esto es un resúmen de todo lo que pueden hacer las funciones, arriba del este archivo hay un
// enlace que te lleva a la documentación de las funciones en javascript.
// Te recomiendo le des un vistazo.
