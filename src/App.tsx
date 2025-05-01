import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import EpisodeDetail from "./pages/EpisodeDetail/EpisodeDetail";
import { SearchProvider } from "./contexts/SearchContext/SearchContext";

function App() {
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
}

export default App;
