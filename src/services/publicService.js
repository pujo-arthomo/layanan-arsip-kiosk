import { supabase } from "./supabaseClient";

export async function cariArsip(keyword) {
  let query = supabase
    .from("koleksi_arsip")
    .select(
      "id, no_berkas, kode_klasifikasi, lokasi_bangunan, jenis_bangunan, kurun_waktu, tingkat_perkembangan"
    )
    .order("created_at", { ascending: false })
    .limit(50);

  if (keyword) {
    query = query.or(
      `no_berkas.ilike.%${keyword}%,lokasi_bangunan.ilike.%${keyword}%,jenis_bangunan.ilike.%${keyword}%,kode_klasifikasi.ilike.%${keyword}%`
    );
  }

  return await query;
}

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