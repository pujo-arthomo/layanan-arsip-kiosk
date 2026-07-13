import { Link } from "react-router-dom";

function BerandaPage() {
  return (
    <div className="min-h-screen w-full bg-[#FBF3E4] flex flex-col">
      {/* Header: logo - stack di layar sempit, sejajar di layar lebar (kiosk) */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-0 px-6 sm:px-10 pt-8 pb-2">
        <img
          src="/img/logo-diskarpus.png"
          alt="Logo Dinas Kearsipan dan Perpustakaan Kota Depok"
          className="max-w-[280px] sm:max-w-[340px] max-h-[90px] sm:max-h-[100px] object-contain"
        />
        <img
          src="/img/logo-berakhlak.png"
          alt="Logo ASN BerAKHLAK"
          className="max-w-[220px] sm:max-w-[280px] max-h-[75px] sm:max-h-[90px] object-contain"
        />
      </div>

      {/* Judul */}
      <div className="text-center px-8 pt-4">
        <h1 className="text-3xl font-extrabold text-[#1B4B3A]">
          Layanan Arsip
        </h1>
        <p className="text-[#5C6B63] text-sm mt-1">
          Dinas Kearsipan dan Perpustakaan Kota Depok
        </p>
        <div className="w-14 h-1.5 bg-[#8BC53F] rounded-full mx-auto mt-3" />
      </div>

      {/* NARA + balon dialog - mengisi ruang atas */}
      <div className="flex-1 flex flex-col items-center justify-end px-8 pt-4">
        <div className="relative bg-white border-2 border-[#1B4B3A] rounded-2xl px-5 py-3 max-w-xs text-center mb-2">
          <p className="text-[#1B4B3A] font-semibold text-base leading-snug">
            "Hai! Aku NARA. Yuk, ajukan permohonanmu di sini — aku bantu
            sampai selesai!"
          </p>
          <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-0 h-0 border-x-[10px] border-x-transparent border-t-[14px] border-t-[#1B4B3A]" />
          <div className="absolute left-1/2 -bottom-[9px] -translate-x-1/2 w-0 h-0 border-x-[7px] border-x-transparent border-t-[11px] border-t-white z-10" />
        </div>

        <img
          src="/img/nara-menyapa.png"
          alt="Maskot NARA"
          className="max-w-[380px] max-h-[440px] w-full object-contain"
        />
      </div>

      {/* Tombol utama - tegas, besar, jatuh di tengah */}
      <div className="px-10 py-8 flex justify-center">
        <Link
          to="/ajukan"
          className="flex items-center gap-3 bg-[#1B4B3A] text-[#FBF3E4] text-2xl font-extrabold px-12 py-6 rounded-full shadow-[0_10px_30px_rgba(27,75,58,0.35)] ring-4 ring-[#8BC53F] ring-offset-4 ring-offset-[#FBF3E4] active:scale-95 transition-transform"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M9 15h6" />
            <path d="M9 11h6" />
          </svg>
          Ajukan Permohonan
        </Link>
      </div>

      {/* Cara pengajuan - mengisi ruang bawah */}
      <div className="flex-1 px-8 pt-4 pb-6">
        <p className="text-center text-sm font-bold text-[#1B4B3A] uppercase tracking-wide mb-5">
          Cara Pengajuan
        </p>
        <div className="space-y-4 max-w-sm mx-auto">
          <div className="flex items-center gap-4 bg-white border border-[#EEE6D6] rounded-2xl p-4">
            <div className="w-11 h-11 rounded-full bg-[#1B4B3A] text-[#FBF3E4] flex items-center justify-center font-bold text-lg flex-shrink-0">
              1
            </div>
            <div>
              <p className="font-bold text-[#1B4B3A]">Isi Data</p>
              <p className="text-sm text-[#5C6B63]">
                Nama, domisili, dan keperluanmu
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white border border-[#EEE6D6] rounded-2xl p-4">
            <div className="w-11 h-11 rounded-full bg-[#1B4B3A] text-[#FBF3E4] flex items-center justify-center font-bold text-lg flex-shrink-0">
              2
            </div>
            <div>
              <p className="font-bold text-[#1B4B3A]">Dapat Nomor Layanan</p>
              <p className="text-sm text-[#5C6B63]">
                Simpan sebagai bukti pengajuan
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white border border-[#EEE6D6] rounded-2xl p-4">
            <div className="w-11 h-11 rounded-full bg-[#1B4B3A] text-[#FBF3E4] flex items-center justify-center font-bold text-lg flex-shrink-0">
              3
            </div>
            <div>
              <p className="font-bold text-[#1B4B3A]">Petugas Memproses</p>
              <p className="text-sm text-[#5C6B63]">
                Kami tindak lanjuti permohonanmu
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code - Survey Kepuasan Masyarakat */}
      <div className="px-8 pb-10 flex justify-center">
        <div className="bg-white border border-[#EEE6D6] rounded-2xl p-5 flex flex-col items-center gap-3 max-w-xs">
          <p className="font-bold text-[#1B4B3A] text-center">
            Survey Kepuasan Masyarakat
          </p>
          <img
            src="/img/qr-survey.png"
            alt="QR Code Survey Kepuasan Masyarakat"
            className="w-[280px] h-[280px] object-contain"
          />
          <p className="text-sm text-[#5C6B63] text-center">
            Scan untuk bagikan pengalamanmu
          </p>
        </div>
      </div>
    </div>
  );
}

export default BerandaPage;