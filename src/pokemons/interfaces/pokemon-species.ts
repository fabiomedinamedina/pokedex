export interface PokemonSpecies {
  flavor_text_entries: FlavorTextEntry[];
  genera: Genera[];
  names: Name[];
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
  version: Version;
}

export interface Language {
  name: string;
  url: string;
}

export interface Version {
  name: string;
  url: string;
}

export interface Genera {
  genus: string;
  language: Language;
}

export interface Name {
  language: Language;
  name: string;
} 