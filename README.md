# Portal Mahasiswa (Vite + TypeScript)
Tugas Praktikum Minggu 06 Mata Kuliah Pengembangan Aplikasi Web

## Evaluasi
**Apa perbedaan commit dan push?** 
- commit: simpan perubahan ke repository lokal di laptop
- push: Unggah commit dari repository lokal ke repository remote di cloud (GitHub)

**Kapan merge conflict terjadi dan bagaimana mengatasing?** 
Terjadi saat 2 branch ubah bagian baris kode yang sama secara berbeda. Cara mengatasinya adalah dengan buka file yang berconflict, pilih bagian kode yang benar, hapus penanda conflict (<<<,===,>>>), simpan, dan selesaikan dengan git add dan git commit.

**Mengapa node_modules tidak boleh di-commit?** 
Karena ukurannya sangat besar (ratusan megabyte) dan isinya berkas hasil unduhan. Cukup dengan file package.json, untuk bisa diunduh dengan menjalankan npm install.

**Apa fungsi interface dan generic dalam TypeScript?** 
- Interface: untuk mendeskripsikan bentuk dan kontrak sebuah objek.
- Generic: untuk membuat fungsi atau struktur data dapat menerima berbagai tipe data, sambil mempertahankan informasi tipenya secara penuh / tanpa kehilangan pemeriksaan tipe (type-safe)

**Mengapa VITE_SECRET_KEY tidak aman untuk menyimpan secret?**
Karena semua variabel yang diawali VITE_ akan dikompilasi dan terekspos secara terbuka di dalam kode JavaScript browser (dapat diintip oleh siapa saja lewat elemen Inspeksi (Inspect Element))
