// -----
// AXIOS
// -----

// https://www.npmjs.com/package/axios

import axios from "axios";
import { GIFResponse } from "./interfaces/gif.response";

// Para obtener este API key: https://developers.giphy.com/
// Crea una cuenta y un nuevo API Key, no uses este, lo borraré.
const apiKey = "K3TZfC5jMhYN2WAScODWLcrH2pWMnwkk";

export const giphyApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: apiKey,
  },
});

giphyApi
  .get<GIFResponse>("/random")
  .then((resp) => console.log(resp))
  .catch((err) => console.error(err));
