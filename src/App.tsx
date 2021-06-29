import { useState } from "react";
import { MobileView } from "react-device-detect";
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
      handleSearch()
    }
  }
  async function handleSearch() {
    const data = await fetchPokemon(search!);
    setPokemon(data);
  }
  return (
    <DivApp>
      <div>
        <Form>
          <Label>Enter a pokemon's name</Label>
          <Input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => handleEnter(e)}
          />
          <MobileView>
            <SearchButton onClick={handleSearch}>Search</SearchButton>
          </MobileView>
        </Form>
        {pokemon && <PokeCard {...pokemon!} />}
      </div>
    </DivApp>
  );
}
export default App;
