export interface Country {
  code: string;
  name: string;
  capital: string;
  currency: string;
  continent: {
    name: string;
  };
}

export interface Continent {
  code: string;
  name: string;
}

export interface CountriesResponse {
  countries: Country[];
}

export interface ContinentsResponse {
  continents: Continent[];
}
