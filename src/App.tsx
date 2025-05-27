import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MuseumDetail from "./pages/MuseumDetail";
import MuseumItemDetail from "./pages/MuseumItemDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/museum/:id" element={<MuseumDetail/>}/>
      <Route path="/museum/:id/:itemIndex" element={<MuseumItemDetail />} />
    </Routes>
  );
}

export default App;