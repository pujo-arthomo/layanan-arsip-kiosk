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

      <div className="w-full max-w-md space-y-4">
        <Link
          to="/cari"
          className="block w-full text-center bg-blue-600 text-white text-lg font-medium py-6 rounded-xl shadow hover:bg-blue-700"
        >
          Cari Arsip
        </Link>

        <Link
          to="/ajukan"
          className="block w-full text-center bg-white border-2 border-blue-600 text-blue-600 text-lg font-medium py-6 rounded-xl shadow hover:bg-blue-50"
        >
          Ajukan Permohonan
        </Link>
      </div>
    </div>
  );
}

export default BerandaPage;