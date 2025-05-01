import { configureStore } from '@reduxjs/toolkit';
import episodesReducer from './episodes/episodesSlice';  


const store = configureStore({
  reducer: {
    episodes: episodesReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
