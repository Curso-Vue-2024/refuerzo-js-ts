// -------------------------------
// Objetos literales en javascript
// -------------------------------

// Así definimos un objeto literal en javascriop
// Deja en cursor del ratón sobre la palabra 'person' y Typesctipr te dará información
// sobre el objeto, observa que te da los tipos de datos de cada propiedad del objeto.
// Objeto: Un objeto es una entidad que se compone por sus propiedades (los campos) y
// los métodos (que realizan algunas funciones relativas al objeto).

// La palabra export es para poder usar person en otro archivo. No te preocupes por eso ahora.

export const person = {
  lastName: "Stark",
  age: 45,
  address: {
    city: "New York",
    zip: 51456,
    lon: 40.6970193,
    lat: -74.3726833,
  },
};

// Los valores del objeto pueden cambiar, lo que no permite 'const' es que se redefina
// el objeto con otras propiedades.
// Esto se puede hacer:

person.lastName = "Parker";

// Aquí nos dará un error
// Descomenta el código siguiente y observa que ocurre:
// person = {
//     prop1: 'Prop1',
//     prop2: 'Prop2',
// }

// Puedes indicar que todas las propiedades del objeto son fijas añadiendo 'as const'
// después de la llave de cierre del objeto:
// Comenta el objeto person anterior y la línea 25; descomenta el código que sigue y observa que ocurre:
/*
const person = {
  lastName: "Stark",
  age: 45,
  address: {
    city: "New York",
    zip: 51456,
    lon: 40.6970193,
    lat: -74.3726833,
  },
} as const;

person.age: 60;
*/

// Para ajecutar este código y ver lo que ocurre lo tenemos que importar en el archivo main.ts
// Comentamos la línea donde importamos el archivo anterior e importamos este.
// Observa lo que ocurre en la consola de las herramientas de desarrollo del navegador.

console.log("person:", person);
const person2 = person;

person2.lastName = "Hernández";

console.log({ person2: person2, person: person });

// Hemos cambiado en person2 la propiedad lastName por Hernández....
// Y misteriósamente en person también se ha cambiado. Eso no es lo que queríamos hacer,
// queríamos hacer un objeto person2 pero con los datos de otra persona. ¿Qué sucedió?
// Cuando asignamos un objeto a una variable lo que se asigna es su address (espacio o durección)
// en memoria, por lo que cuando accedemos a la copia y cambiamos un valor, estamos cambiando el valor
// que hay en ese espacio de memoria.

// Hay que tener eso muy en cuenta, ya que el uso de ese tipo de asignación en objeto de javascript
// puede dar muchos problemas al programador y nunca saber dónde está el error.

// Para resolver esto podemos hacer uso del operador spread (...), sí, son 3 puntos. Lo que hace este operador
// es una copia del objeto:

const person3 = { ...person };

person3.lastName = "Pérez";

console.log({ person3: person3, person: person });
// Observa en la consola del navegador que produce este código.

// Hagamos un nuevo cambio:

person3.address.city = "Sevilla";

console.log({ person3: person3, person: person });
// ¡Ay, no! Se ha cambiado el valor de la propiedad address.city por el mismo en ambos objetos. ¿Qué pasó?
// Igual que antes, los objetos son pasados por referencia a su posición en memoria, así que al
// hace la copia con ..., el objeto address que estaba dentro de person se pasó por referencia a person3.

// Una forma de resolver esto es desectructurar todos los objetos que haya anidados (uno dentro de otro,
// hasta el infinito o la memoria nos permita):

const person4 = { ...person, address: { ...person.address } };

person4.address.city = "Cádiz";

console.log({ person4: person4, person: person });
// Observa lo que ocurre en la consola del navegador.
// Ahora sí funciona, pero imagenemos un objeto con objetos anidados a 3, 4 o más niveles....
// Sería terrible el código que habría que escribir para poder usarlo.
// Un consejo: ¡No hagas esto nunca, pero NUCA, NUNCA!

// Podemos usar la función structuredClone(objeto), que hara una copia completa del objeto sin que
// se queden las referencias de memoria. Es decir, reserva nuevos espacios de memoria para el nuevo objeto
// clonado.

const person5 = structuredClone(person);

person5.address.city = "Los Ángeles";

console.log({ person5: person5, person: person });
// Observa el resultado en la consola del navegador y ¡ahora sí!.
// Hay otra forma de crear y usar objetos en Typescript, los veremos más adelante.
// Para poder usar el objeto person fuera de este módulo en próximos archivos, por favor, pon
// la palabra export antes de const al principio de este archivo.
