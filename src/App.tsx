import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MuseumDetail from "./pages/MuseumDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/museum/:id" element={<MuseumDetail/>}/>
    </Routes>
  );
}

export default App;