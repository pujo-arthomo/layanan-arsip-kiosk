import { supabase } from "./supabaseClient";

function buatNomorTiket() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const stamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}`;
  return `PMH-${stamp}`;
}

export async function ajukanPermohonan({ nama, domisili, keterangan }) {
  const nomorTiket = buatNomorTiket();

  const { error } = await supabase.from("pemohon_arsip").insert([
    {
      nama,
      domisili,
      keterangan,
      no_rekomendasi: nomorTiket,
      status: "Menunggu",
      waktu_pengajuan: new Date().toISOString(),
    },
  ]);

  return { nomorTiket, error };
}