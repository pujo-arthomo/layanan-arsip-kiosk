import { Link } from "react-router-dom";

function BerandaPage() {
  return (
    <div className="min-h-screen w-full bg-[#FBF3E4] flex flex-col">
      {/* Header: logo kiri-kanan */}
      <div className="flex items-center justify-between px-10 pt-8 pb-4">
        <img
          src="/img/logo-diskarpus.png"
          alt="Logo Dinas Kearsipan dan Perpustakaan Kota Depok"
          className="max-w-[380px] max-h-[120px] object-contain object-left"
        />
        <img
          src="/img/logo-berakhlak.png"
          alt="Logo ASN BerAKHLAK"
          className="max-w-[320px] max-h-[100px] object-contain object-right"
        />
      </div>

      {/* Judul */}
      <div className="text-center px-8 pt-6">
        <h1 className="text-4xl font-extrabold text-[#1B4B3A]">
          Layanan Arsip
        </h1>
        <p className="text-[#5C6B63] text-base mt-2">
          Dinas Kearsipan dan Perpustakaan Kota Depok
        </p>
        <div className="w-16 h-1.5 bg-[#8BC53F] rounded-full mx-auto mt-5" />
      </div>

      {/* NARA + balon dialog, didorong ke bawah */}
      <div className="flex-1 flex flex-col items-center justify-end px-8 pt-8">
        <div className="relative bg-white border-2 border-[#1B4B3A] rounded-2xl px-6 py-4 max-w-sm text-center mb-3">
          <p className="text-[#1B4B3A] font-semibold text-lg leading-snug">
            "Hai! Aku NARA. Yuk, ajukan permohonanmu di sini — aku bantu
            sampai selesai!"
          </p>
          <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-0 h-0 border-x-[10px] border-x-transparent border-t-[14px] border-t-[#1B4B3A]" />
          <div className="absolute left-1/2 -bottom-[9px] -translate-x-1/2 w-0 h-0 border-x-[7px] border-x-transparent border-t-[11px] border-t-white z-10" />
        </div>

        <img
          src="/img/nara-menyapa.png"
          alt="Maskot NARA"
          className="max-w-[560px] max-h-[680px] w-full object-contain"
        />
      </div>

      {/* Tombol utama */}
      <div className="px-10 pt-8 pb-12">
        <Link
          to="/ajukan"
          className="block w-full text-center bg-[#1B4B3A] text-[#FBF3E4] text-xl font-bold py-5 rounded-full shadow-lg"
        >
          Ajukan Permohonan
        </Link>
      </div>
    </div>
  );
}

export default BerandaPage;