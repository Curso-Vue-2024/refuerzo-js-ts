// -----------------------------
// Importaciones y exportaciones
// -----------------------------

// Para ver los resultados, recuerda comentar la importación del archivo anterior en el main.ts
// e importar este.

// import se usa para importar un elemento de un módulo o un módulo completo.
// export se usa para indicar que un elemento o un módulo completo se pone a disposición
// para ser importado por otro.

// Vamos a trabajar con el archivo heroes.ts que está en la carpeta data (dentro de bases).
// Abre el archivo y observa lo que contiene:
// - un array de objetos
// - una exportacion de un array
// - una exportación con la palabra 'default'.

// Vamos con los ejemplos para ver como funciona:
// podemos importar los 'owners' y usarlos:

// import { owners } from "./data/heroes";

import heroes, { Owner, owners } from "./data/heroes";
console.log(owners);

// Declarando export const owner=[...], podemos acceder directamente a esa constante que contiene el array.

// Vamos a usar el array de heroes:
console.log(heroes);
// Al usar los heroes los importa fiera de las llaves. Eso pasa por que es la exportación por defecto-

// Vamos a crear una función para obtener un heroe por su id:
// Observa el nombre de la función, indica que es lo que hace y mejora la legibilidad del código.
// Descomenta esta función y los console.log :
//! const getHeroById = (id: number) => {
//!   return heroes.find((hero) => hero.id === id);
//! };

//! console.log(getHeroById(1));

// Si intentamos buscar un heroe cuyo id no exsiste ¿qué pasará?
//! console.log(getHeroById(100));
// Devuelve undefined, eso no nos gusta. ¿Podría recibir, por ejemplo, un objeto vacío?
// Modifiquemos la función.
// Comenta la anterior función y los console log y descomenta la que sigue:
export const getHeroById = (id: number) => {
  return heroes.find((hero) => hero.id === id);
};
//! console.log(getHeroById(1000));
// Muy bien, ahora el return de la función comprueba si la busqueda retorna un valor y si no es así
// nos da un objeto vacío: {}

// Vamos a buscar todos los heroes de determinado owner, para ello usaremos el método filter de los arrays:
// export const getHeroByOwner = (owner: string) => {
export const getHeroByOwner = (owner: Owner) => {
  return heroes.filter((hero) => hero.owner === owner);
};
// Pedimos los de 'DC':
console.log(getHeroByOwner("DC"));

// Intenta buscar los de 'marvel', con m minúscula.
// ¡No devuelve nada! Eso es por que Javascripy y Typescript son 'case sentitive, es decir, distingue
// entre mayúsculas y minúsculas.

//? Para continuar, vamos a hacer unos cambios en el módulo heroes.ts que está dentro de /data:
//? Abre el archivo heroes.ts y sigue las recomendaciones en comentarios.

//? En la función getHeroByOwner, cambiemos el tipo de dato string por el Owner. El tipo Owner se añadirá a
//? las importaciones.

//? En la funcion getHeroById quita del return la alternativa: ?? {}, para que devulva undefined.
//? Lo vamos a necesitar así en otro ejercicio.

//? Para terminar en este módulo, exportemos las funciones que hemos hecho para poder usarlas en otros módulos.
