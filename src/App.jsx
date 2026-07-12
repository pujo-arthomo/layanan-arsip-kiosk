import { BrowserRouter, Routes, Route } from "react-router-dom";
import BerandaPage from "./app/beranda/BerandaPage";
import CariArsipPage from "./app/cari/CariArsipPage";
import AjukanPage from "./app/ajukan/AjukanPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BerandaPage />} />
        <Route path="/cari" element={<CariArsipPage />} />
        <Route path="/ajukan" element={<AjukanPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;