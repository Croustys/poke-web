import { useState } from "react";
import "./App.css";
import { fetchPokemon } from "./api";
import { IPokemon } from "./interfaces/interfaces";
import PokeCard from "./components/PokeCard";

import { DivApp, Form, Input, Label, SearchButton } from "./TSStyled";

function App() {
  const [search, setSearch] = useState<string>();
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);

  async function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  }
  async function handleSearch() {
    const data = await fetchPokemon(search!);
    setPokemon(data);
  }
  function change() {
    alert("HEHE");
  }
  return (
    <DivApp>
      <div>
        <Form>
          <Label>Enter a pokemon's name</Label>
          <Input
            type="text"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            onKeyPress={(e) => handleEnter(e)}
          />
        </Form>
        <SearchButton onClick={handleSearch}>Search</SearchButton>
        {pokemon && <PokeCard {...pokemon!} />}
      </div>
    </DivApp>
  );
}
export default App;
