import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Episode } from '../../pages/Home/Home.types';

type EpisodesState = {
  favorites: Episode[];  
  watched: Episode[];    
};

const initialState: EpisodesState = {
  favorites: [],
  watched: [],
};

const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Episode>) => {
      const episodeExists = state.favorites.find((episode) => episode.id === action.payload.id);
      if (!episodeExists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((episode) => episode.id !== action.payload);
    },
    addWatched: (state, action: PayloadAction<Episode>) => {
      const episodeExists = state.watched.find((episode) => episode.id === action.payload.id);
      if (!episodeExists) {
        state.watched.push(action.payload);
      }
    },
    removeWatched: (state, action: PayloadAction<string>) => {
      state.watched = state.watched.filter((episode) => episode.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite, addWatched, removeWatched } = episodesSlice.actions;

export default episodesSlice.reducer;
