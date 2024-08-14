// ------------------------------------------
// Desestructuración de objetos en Typescript
// ------------------------------------------

// Para ver los resultados, recuerda comentar la importación del archivo anterior en el main.ts
// e importar este.

// Difinamos un objeto:
export const person = {
  name: "Tony",
  age: 45,
  codeName: "IronMan",
};

// Para acceder a las propiedades de un objeto lo hacemos de esta forma:
console.log(person.name, person.age, person.codeName);

// Repetimos varias veces la palabra person.
// Nos hace falta obtener sólo el nombre y la edad de person. Para eso podemos usar la
// desestructuración del objeto de esta forma:

const { name, age } = person;
console.log({ name, age });

// Obtenemos los valores en variables independientes.
// Observa el resultado en la consola del navegador.

// ---------
// Interface
// ---------

// Una interface en Typescript (esto es propio de Typescript y no se ejecuta en Javascript) es una
// estructura de como queremos que sea nuestro objeto. Veamos un ejemplo:
// Las interfaces se define con la palabra interface, el nombre en CamelCase y llaves {}.
// Dentro de la interfaz definiremos cada una de sus propiedades, seguidas de :, el tipo de dato
// que almacenará y un ; al final.
// Si tenemos propiedades que son opcionales, lo indicaremos con un ? entre el nombre de la propiedad
// y los :
// Las propiedaes que no llevan el ? son obligatorias y al crear un objeto que use la interfaz
// deberemos indicar su valor.
interface Hero {
  name: string;
  age: number;
  codeName: string;
  power?: string;
}

// Usamos la interfaz como un tipo de dato.
// Vamos a indicar que heroes es un array de Hero. Veamos:
const heroes: Hero[] = [
  {
    name: "Tony",
    age: 45,
    codeName: "IronMan",
  },
  {
    name: "David",
    age: 32,
    codeName: "DavidMan",
    power: "Guns",
  },
  {
    name: "John",
    age: 50,
    codeName: "JohnDoe",
    power: "Everiwere",
  },
];

// Como se puede ver, el uso de la interfaz nos ayuda a rellenar las propiedades de cada heroe,
// mostrando errores cuabdo no idicamos allguna obligatoria o le damos el valor del tipo de dato mal.

console.log(heroes);

// Veamos como usar una interfaz en una función para recibir y crear un objeto.
interface CreateHeroArgs {
  name: string;
  age: number;
  codeName: string;
  power?: string;
}

// Desecytuturamos las propirdades para poder usarlas directamente si necesidad de repetir
// CreateHeroArgs por cada una.
const createHero = ({ name, age, codeName, power }: CreateHeroArgs) => ({
  name: name,
  age: age,
  codeName: codeName,
  power: power ?? "Not power",
});

// También se puede hacer de esta manera:
// Se recibe el objeto por parámentro y se desestructura dentro de la función.
// La mejor forma de hacerlo: la que sea más cómoda para tí y para la legibilidad de la función.
/*
const createHero = (hero: CreateHeroArgs) => ({

    const { name, age, codeName, power } = hero;

    name: name,
    age: age,
    codeName: codeName,
    power: power ?? "Not power",
  });
*/

const pepeHero = createHero({ name: "Pepe", age: 34, codeName: "PepeFlat" });

console.log(pepeHero);
