import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from "../contexts/SearchContext/SearchContext";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import FavoriteEpisodes from "../pages/FavoriteEpisodes/FavoriteEpisodes";
import EpisodeDetail from "../pages/EpisodeDetail/EpisodeDetail";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SearchProvider>
              <Header showSearch />
              <Home />
            </SearchProvider>
          }
        />
        <Route
          path="/favorites"
          element={
            <SearchProvider>
              <Header showSearch={false} />
              <FavoriteEpisodes />
            </SearchProvider>
          }
        />
        <Route
          path="/episode/:id"
          element={
            <SearchProvider>
              <Header showSearch={false} />
              <EpisodeDetail />
            </SearchProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
