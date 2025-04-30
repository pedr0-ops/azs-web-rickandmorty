import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import EpisodeDetail from "./pages/EpisodeDetail/EpisodeDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episode/:id" element={<EpisodeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
