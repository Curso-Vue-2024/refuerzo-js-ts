// --------------------
// Proomesas (promises)
// --------------------

// Una promesa es una acción que representa el éxito o el fracaso de una petición asíncrona.
// Documentación sobre promesas: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises

// Aquí se inicia la aplicación
console.log("Inicio");

// Lanzamos una promesa que ejecutará la función callback .then() cuando se resuelva.
// Dentro de la promesa se ejecuta la función resolve.
new Promise((resolve) => {
  resolve("Promesa 1: Se ha resuelto la promesa.");
}).then((message) => console.log(message));

// Aquí termina el programa.
console.log("Fin");

// Aquí aparece la resolución de la promesa.
// La resolución de las promesas se ejecutan en otro hilo de proceso de Javascript y
// retornan el resultaco cuando el hilo principal está libre.

// El la promesa anterior hemos supuesto que todo sale bien y ¿si se produce un error?

// new Promise((resolve, reject) => {
//   reject("Se ha producido un problema.");
// }).then((message) => console.log(message));

// Observa el resultado en la consola del navegador web.
// ¡Se ha producido un error! ¿Cómo controlo eso?
// Comenta el codigo de la anterior promesa y descomenta el que sigue.
// Para eso la promesa tiene un método catch():
new Promise((resolve, reject) => {
  reject("Promesa 2: Se ha producido un problema.");
})
  .then((message) => console.log(message))
  .catch((message) => console.log(message));
// Ahora hemos 'cazado' el error y podemos tomar decisiones en nuestro progama.
// Las promesas tienen otro método que siempre se va a ejecutar, falle o no falle,
// el método finally().
// Comenta el código anterior y descomenta el siguiente:
new Promise((resolve, reject) => {
  reject("Promesa3: Esta tampoco se resuelve.");
})
  .then((message) => console.log(message))
  .catch((message) => console.log(message))
  .finally(() =>
    console.log("Esto se va a ejecutar siempre, se resuelva o no la promesa.")
  );

// ¿Qué retorna una Promesa?
// Una Promesa devuelve eso, la promesa, y debemos especificar el tipo de dato para que podamos
// trabajar con seguridad.
// Veamos este ejemplo:

import { getHeroById } from "./07-imp-exp";
import { type Hero } from "./data/heroes";
// Indicamos con type que Hero es una interface o un type.

// Le indicamos a la función que va a retornar, en este caso una promesa que contiene un Hero.
const getHeroByIdAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    // Vamos a usar un retardo de 1.5 segundos para simular una respuesta asíncrona.
    setTimeout(() => {
      // Hacemos la petición a nuestra API, usando la función del ejercicio 07.
      const hero = getHeroById(id);

      //   // Comprobamos si viene el hero
      //   if (hero) {
      //     // si viene lo retornamos con el resolve
      //     resolve(hero);
      //   } else {
      //     // si no viene, enviamos un mensaje de error
      //     reject(`No se encontró el héroe con el id: ${id}`);
      //   }

      // Optimicemos este código:
      // Comprobamos si viene el hero
      //   if (hero) {
      //     // si viene lo retornamos con el resolve
      //     resolve(hero);
      //     // y hacemos un return para que ya no se siga ejecutando el programa
      //     return;
      //   }
      // Hemos ahorrado un poco de código y está más limpio y legible.
      //   // si no viene, enviamos un mensaje de error
      //   reject(`No se encontró el héroe con el id: ${id}`);

      // Y con un ternario lo hariamos aún más optimizado y legible:
      hero ? resolve(hero) : reject(`No se encontró el héroe con el id: ${id}`);
    }, 1500); // 1500 milisegundos. Mira la documentacion de setTimeOut https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
  });
};

// Prueba con distintos valores par el id y observa en la consola lo que sucede:
getHeroByIdAsync(2)
  .then((hero) => console.log(`El heroe con id ${hero.id} es ${hero.name}`))
  .catch((message) => console.log(message));
