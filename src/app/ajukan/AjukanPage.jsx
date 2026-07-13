import { useState } from "react";
import { Link } from "react-router-dom";
import { ajukanPermohonan } from "../../services/publicService";

function AjukanPage() {
  const [form, setForm] = useState({
    nama: "",
    domisili: "",
    keterangan: "",
    no_rekomendasi: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [nomorLayanan, setNomorLayanan] = useState(null);

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const { nomorLayanan: hasil, error } = await ajukanPermohonan(form);

    if (error) {
      setError(error.message);
      setSaving(false);
      return;
    }

    setNomorLayanan(hasil);
    setSaving(false);
  }

  if (nomorLayanan) {
    return (
      <div className="min-h-screen w-full bg-[#FBF3E4] flex items-center justify-center p-8">
        <div className="bg-white border-2 border-[#1B4B3A] rounded-2xl shadow p-8 max-w-md w-full text-center">
          <p className="text-[#5C6B63]">Permohonan kamu berhasil dikirim</p>
          <p className="text-sm text-[#8A8168] mt-1 mb-4">
            Simpan atau foto nomor layanan ini
          </p>
          <p className="text-4xl font-bold text-[#1B4B3A] tracking-wide">
            {nomorLayanan}
          </p>
          <p className="text-sm text-[#5C6B63] mt-4">
            Tunjukkan nomor ini ke petugas untuk menanyakan status permohonan.
          </p>
          <Link
            to="/"
            className="inline-block mt-6 bg-[#1B4B3A] text-[#FBF3E4] px-6 py-3 rounded-full font-bold"
          >
            Kembali ke beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#FBF3E4] p-8">
      <div className="max-w-md mx-auto">
        <Link to="/" className="text-[#1B4B3A] text-sm font-semibold hover:underline">
          ← Kembali ke beranda
        </Link>

        <h1 className="text-2xl font-extrabold text-[#1B4B3A] mt-3">
          Ajukan Permohonan
        </h1>
        <p className="text-[#5C6B63] mb-6">
          Isi data di bawah untuk mengajukan permohonan layanan arsip.
        </p>

        {error && (
          <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-3 mb-4">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white border border-[#EEE6D6] rounded-2xl p-5 shadow-sm"
        >
          <div>
            <label className="block text-sm text-[#5C6B63] mb-1">Nama</label>
            <input
              type="text"
              required
              value={form.nama}
              onChange={(e) => handleChange("nama", e.target.value)}
              className="w-full border border-[#DDD3BC] px-4 py-3 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#8BC53F]"
            />
          </div>

          <div>
            <label className="block text-sm text-[#5C6B63] mb-1">Domisili</label>
            <input
              type="text"
              required
              value={form.domisili}
              onChange={(e) => handleChange("domisili", e.target.value)}
              className="w-full border border-[#DDD3BC] px-4 py-3 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#8BC53F]"
            />
          </div>

          <div>
            <label className="block text-sm text-[#5C6B63] mb-1">
              Nomor Rekomendasi (dari PTSP)
            </label>
            <input
              type="text"
              required
              value={form.no_rekomendasi}
              onChange={(e) => handleChange("no_rekomendasi", e.target.value)}
              className="w-full border border-[#DDD3BC] px-4 py-3 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#8BC53F]"
            />
          </div>

          <div>
            <label className="block text-sm text-[#5C6B63] mb-1">
              Arsip/keperluan yang dicari
            </label>
            <textarea
              required
              rows={4}
              value={form.keterangan}
              onChange={(e) => handleChange("keterangan", e.target.value)}
              className="w-full border border-[#DDD3BC] px-4 py-3 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-[#8BC53F]"
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="w-full bg-[#1B4B3A] text-[#FBF3E4] text-lg font-bold py-4 rounded-full disabled:opacity-50"
          >
            {saving ? "Mengirim..." : "Kirim Permohonan"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AjukanPage;