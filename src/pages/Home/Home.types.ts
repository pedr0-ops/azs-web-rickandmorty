export type Character = {
  id: string;
};

export type Episode = {
  id: string;
  name: string;
  air_date: string;
  characters: Character[];
};

export type EpisodesQuery = {
  episodes: {
    info: {
      count: number;
      pages: number;
      next: number | null;
      prev: number | null;
    };
    results: Episode[];
  };
};

export  type EpisodesVars = {
  page: number;
};