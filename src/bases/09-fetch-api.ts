// ---------
// Fetch API
// ---------

import { type GIFResponse } from "./interfaces/gif.response";

// Para obtener este API key: https://developers.giphy.com/
// Crea una cuenta y un nuevo API Key, no uses este, lo borraré.
const apiKey = "K3TZfC5jMhYN2WAScODWLcrH2pWMnwkk";
const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

fetch(apiUrl)
  .then((resp) => resp.json())
  .then((body: GIFResponse) => console.log(body))
  .catch((err) => console.error(err));
