// -----------------------------------------
// Desestructuración de arrays en Typescript
// -----------------------------------------

// Para ver los resultados, recuerda comentar la importación del archivo anterior en el main.ts
// e importar este.

// La desestructuración en arrays es similar a la de los objetos, pero con algunas cosas diferentes.

// Creemos un array de personajes:
const character = ["Goku", "Vegeta", "Trunkc", "Goten"];

// Necesitamos desestructurar del array a Goku y guardar su valor en una constante:
const [personaje1] = character;
// Observa que para desestructurar arrays se hace con [] en vez de con {} de los objetos.
// En personaje1 tenemos a Goku
console.log({ personaje1 });
// La desestructuración de un array se hace por elementos posicionales, si queremos a Vegeta:
const [, personaje2] = character;
// En la primera posición he puesto un espacio y la coma para no usarla.
console.log({ personaje2 });
// En la constante personaje2 tenemos a Vegeta.

// Podemos obtener todos los personajes de esta forma:
const [p1, p2, p3, p4] = character;
// Mira la salida:
console.log({ p1, p2, p3, p4 });

// ¿Qué parará si pido más elementos de los que hay en el array?
// Vaámoslo:
const [c1, c2, c3, c4, c5, c6] = character;
// ¿Qué creéis que pasará?
// Observa la salida:
console.log({ c1, c2, c3, c4, c5, c6 });
// Las constantes que no pueden tener valor traen 'undefined'.
// Si se necesita un valor en las constantes que se 'salen' del array, se pueden indicar
// en la desestructuración:
const [a1, b2, c3_1, d4, e5 = "Aquí va la e", f6 = "Aquí va la f"] = character;
// Mira la salida ahora. (La constante c3 ya estaba definida antes, por eso le he puesto c3_1).
// !Nota importante: estamos usando nombres de constates, arreglos y demás, de forma aleatoria. Cuando
// !ya estemos trabajando con programación de aplicaciones deberemos usar nombres descriptivos para
// !facilitar la lectura del código.
console.log({ a1, b2, c3_1, d4, e5, f6 });
// Observa que al poner los valores encerrados entre {} console.log() los muestra como un objeto, aunque no lo son.
// Revisa la documentación de console.* para ver otras opciones:
// https://developer.mozilla.org/es/docs/Web/API/console
