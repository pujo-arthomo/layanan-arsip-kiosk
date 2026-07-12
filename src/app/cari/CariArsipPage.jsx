import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cariArsip } from "../../services/publicService";

function CariArsipPage() {
  const [keyword, setKeyword] = useState("");
  const [hasil, setHasil] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sudahCari, setSudahCari] = useState(false);

  useEffect(() => {
    muatData("");
  }, []);

  async function muatData(kw) {
    setLoading(true);
    const { data, error } = await cariArsip(kw);
    if (!error) {
      setHasil(data);
    }
    setLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSudahCari(true);
    muatData(keyword);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="text-blue-600 text-sm hover:underline">
          ← Kembali ke beranda
        </Link>

        <h1 className="text-2xl font-semibold text-gray-800 mt-3">
          Cari Arsip
        </h1>
        <p className="text-gray-500 mb-6">
          Cari berdasarkan nomor berkas, lokasi, atau jenis bangunan.
        </p>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Contoh: Kecamatan Beji"
            className="flex-1 border px-4 py-3 rounded-lg text-lg"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
          >
            Cari
          </button>
        </form>

        {loading ? (
          <p className="text-gray-500 text-center py-10">Memuat...</p>
        ) : hasil.length === 0 ? (
          <p className="text-gray-500 text-center py-10">
            {sudahCari
              ? "Tidak ada arsip yang cocok dengan pencarian."
              : "Belum ada data arsip."}
          </p>
        ) : (
          <div className="space-y-3">
            {hasil.map((item) => (
              <div
                key={item.id}
                className="bg-white border rounded-lg p-4 shadow-sm"
              >
                <p className="font-medium text-gray-800">
                  {item.no_berkas} — {item.kode_klasifikasi}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {item.lokasi_bangunan} · {item.jenis_bangunan}
                </p>
                <p className="text-sm text-gray-500">
                  Kurun waktu: {item.kurun_waktu} · {item.tingkat_perkembangan}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CariArsipPage;