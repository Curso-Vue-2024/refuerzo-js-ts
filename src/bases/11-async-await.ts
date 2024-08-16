// -------------
// async - await
// -------------

import { giphyApi } from "./10-axios";
import { type GIFResponse } from "./interfaces/gif.response";

// async transforma la funcion getImage en una funcion que resuenve una promesd.
export const getImage = async () => {
  try {
    const resp = await giphyApi.get<GIFResponse>("/random");
    return resp.data.data.images.downsized_large.url;
  } catch (error) {
    throw "Url no encontrado";
  }
};

// Observa la salida en la consola del navegador.
getImage()
  .then((url) => console.log({ url }))
  .catch((error) => console.error(error));
