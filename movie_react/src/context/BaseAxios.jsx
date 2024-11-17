//To make the URL shorter for TMDB requests

import axios from "axios";

export const BaseAxios = axios.create({
    baseURL: '' //'needs the base url',
});