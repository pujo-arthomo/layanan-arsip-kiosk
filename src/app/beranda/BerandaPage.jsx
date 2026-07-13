import { Link } from "react-router-dom";

function BerandaPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-semibold text-gray-800 text-center">
        Layanan Arsip
      </h1>
      <p className="text-gray-500 mt-1 mb-10 text-center">
        Dinas Kearsipan dan Perpustakaan Kota Depok
      </p>

      <Link
        to="/ajukan"
        className="w-full max-w-md text-center bg-blue-600 text-white text-xl font-medium py-8 rounded-xl shadow hover:bg-blue-700"
      >
        Ajukan Permohonan
      </Link>
    </div>
  );
}

export default BerandaPage;