// Union Type status Mahasiswa
type statusMahasiswa = "aktif" | "cuti" | "lulus";

// Interface Struktur Data Mahasiswa
interface Mahasiswa {
  nim: string;
  nama: string;
  semester: number;
  status: statusMahasiswa;
  email?: string;
}

// Fungsi Generic untuk bungkus data
function bungkusRespons<T>(data: T) {
  return {
    timestamp: new Date().toISOString(), payload: data
  }; 
}

// Data Mahasiswa
const daftarMahasiswa: Mahasiswa[] = [
  {nim: "1247050079", nama: "Meutia Hasna Syahida", semester: 5, status: "aktif", email: "meutiahasna@gmail.com"},
  {nim: "1237050000", nama: "Nama Mahasiswa", semester: 7, status: "lulus"}
];

// Pake Fungsi Generic
const responsTerbungkus = bungkusRespons(daftarMahasiswa);

// Ambil variabel dari file .env
const namaAplikasi = import.meta.env.VITE_APP_NAME || "Portal Mahasiswa";

// Render tampilan ke DOM
const appElement = document.querySelector<HTMLDivElement>('#app')!;

appElement.innerHTML = `
  <div>
    <h1>${namaAplikasi}</h1>
    <p>Waktu Muat: ${responsTerbungkus.timestamp}</p>
    <h2>Daftar Mahasiswa:</h2>
    <ul>
      ${responsTerbungkus.payload.map(mhs => `
        <li>
          <strong>${mhs.nama}</strong> (${mhs.nim}) - Semester ${mhs.semester} 
          | Status: <em>${mhs.status.toUpperCase()}</em>
        </li>
      `).join('')}
    </ul>
  </div>

  <p><em>Dibuat oleh Meutia</em></p> 
`;
// perubahan fitur portal mahasiswa