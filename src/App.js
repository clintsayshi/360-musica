import { Routes, Route } from "react-router-dom";
import Collections from "./pages/collections";
import Home from "./pages/home";
import MusicVideos from "./pages/music-videos";
import Profile from "./pages/profile";
import Radio from "./pages/radio";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/collections" element={<Collections />} />
        <Route exact path="/music-videos" element={<MusicVideos />} />
        <Route exact path="/radio" element={<Radio />} />
        <Route exact path="/:profileId" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
