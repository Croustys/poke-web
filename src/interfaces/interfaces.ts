export interface IPokemon {
  abilities: IAbility[];
  base_experience: number;
  forms: IForm[];
  game_indices: IGame_indice[];
  height: number;
  held_items: IHeld_items[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMoves[];
  name: string;
  order: number;
  past_types: any[];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  stats: any[];
  types: IType[];
  weight: number;
}
interface ISubType {
  name: string;
  url: string;
}
interface IType {
  slot: number;
  type: ISubType;
}
interface IMoves {
  move: {
    name: string;
    url: string;
  };
  version_group_details: any[];
}
interface IHeld_items {
  item: {
    name: string;
    url: string;
  };
  version_details: IVersion_details[];
}
interface IVersion_details {
  rarity: number;
  version: {
    name: string;
    url: string;
  };
}
interface IAbility {
  name: string;
  url: string;
  is_hidden: boolean;
  slot: number;
}
interface IForm {
  name: string;
  url: string;
}
interface IGame_indice {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}
