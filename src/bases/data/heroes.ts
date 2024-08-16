// Datos de heroes

// Intetface para definir los heroes con sus datos y sus tipos
export interface Hero {
  id: number;
  name: string;
  // owner: string;
  owner: Owner;
}

// Creemos un tipo (que es como una interface) para establecer los owners:
// El caracter pipe indica aquí que puede ser una u otra cosa.
export type Owner = "DC" | "Marvel";
// Ahora cambiemos el tipo de dato en la propiedad owner de la interface de Hero (estaba string).

// Tanto las insterfaces como los types son código propio de Typescript que nos ayuda a que nuestros
// programas sean más legibles y seguros. Esas definiciones de datos no se traducen a código Javascript
// en la transpilación o generación del bundle de producción.

// Exportamos la interface y el type para poder usarlos en otros módulos.

// Indicamos que nuestros heroes son yn array que tiene que cumplir la interface Hero.
const heroes: Hero[] = [
  {
    id: 1,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC",
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC",
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel",
  },
];

// Esto es una exportación individual del owners.
// Evitemos que se pueda añadir otro dato a este array indicando que es un array de constantes:
// export const owners = ["DC", "Marvel"];
export const owners = ["DC", "Marvel"] as const;

export default heroes;
