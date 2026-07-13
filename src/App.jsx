import { BrowserRouter, Routes, Route } from "react-router-dom";
import BerandaPage from "./app/beranda/BerandaPage";
import AjukanPage from "./app/ajukan/AjukanPage";
import useIdleRedirect from "./hooks/useIdleRedirect";

function AppRoutes() {
  useIdleRedirect();

  return (
    <Routes>
      <Route path="/" element={<BerandaPage />} />
      <Route path="/ajukan" element={<AjukanPage />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;