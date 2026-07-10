import { BrowserRouter, Routes, Route } from "react-router-dom";

function BerandaKiosk() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Layanan Arsip Diskarpus Kota Depok
        </h1>
        <p className="text-gray-500 mt-2">Halaman kiosk sedang disiapkan.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BerandaKiosk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;