export interface Character {
  id: string
  name: string
  image: string
  species: string
  status: string
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
