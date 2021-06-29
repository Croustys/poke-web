import axios from "axios";
import { IPokemon } from "../interfaces/interfaces";

const URL = `https://pokeapi.co/api/v2/pokemon/`;
export async function fetchDefault(): Promise<void> {
  const resp = await axios.get(URL);
  const data = await resp.data;
  const pokeDatas = [];
  for (const poke of data.results) {
    const r = await axios.get(poke.url);
    console.log(r.data);
    pokeDatas.push(r.data as IPokemon);
  }
}
export async function fetchPokemon(name: string): Promise<IPokemon> {
  const resp = await axios.get(`${URL}${name}`);
  return await resp.data;
}
