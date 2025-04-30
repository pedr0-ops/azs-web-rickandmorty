export enum StatusEnum {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

type StatusType = "Alive" | "Dead" | "unknown";

export interface Character {
  id: string
  name: string
  image: string
  species: string
  status: StatusType
}

export interface Episode {
  id: string
  name: string
  air_date: string
  characters: Character[]
}

export interface EpisodeQuery {
  episode: Episode
}

export interface EpisodeVars {
  id: string
}
