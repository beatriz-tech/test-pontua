import axios from "axios";
import md5 from "md5";

const publicKey = "76f4bff4248e5daa03d2f302572abd7c";
const privateKey = "a7111dd0961a53b973096496c87fbf002cc047ea";
const ts = Number(new Date());
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public",
  method: "GET",
  params: {
    apikey: publicKey,
    ts: ts,
    hash: hash,
  },
  Headers: {
    Accept: 20,
  },
});

export default api;
