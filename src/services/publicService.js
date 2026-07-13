import { supabase } from "./supabaseClient";

function buatNomorLayanan() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const stamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}`;
  return `LYN-${stamp}`;
}

export async function ajukanPermohonan({ nama, domisili, keterangan, no_rekomendasi }) {
  const nomorLayanan = buatNomorLayanan();

  const { error } = await supabase.from("pemohon_arsip").insert([
    {
      nama,
      domisili,
      keterangan,
      no_rekomendasi,
      nomor_layanan: nomorLayanan,
      status: "Menunggu",
      waktu_pengajuan: new Date().toISOString(),
    },
  ]);

  return { nomorLayanan, error };
}