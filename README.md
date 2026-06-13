<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://graph.org/file/57e167d50319ec4f26feb-71220d5d60eaed9355.jpg" />
</div>

# Notion Agents - High-Fidelity Interactive Landing Page Replica

Sebuah proyek replika interaktif beresolusi tinggi dari halaman produk **Notion Agents** berdasarkan analisis detail tangkapan layar fungsionalitas dan desain aslinya. Website ini memadukan estetika modern minimalis khas Notion dengan sistem simulasi interaktif yang berjalan sepenuhnya di sisi klien (*client-side*).

---

# Deskripsi Proyek

Aplikasi web ini dirancang menggunakan **React 19**, **Vite**, **TypeScript**, dan **Tailwind CSS v4** untuk menyajikan replika antarmuka landing page produk Notion Agents secara presisi. Tidak sekadar statis, proyek ini meluncurkan simulasi agen kecerdasan buatan (AI) yang bekerja secara dinamis untuk mengilustrasikan fungsionalitas pendukung alur kerja modern berbasis tim.

---

# Fitur Utama (Features)

### 1. Header & Banner Bahasa Internasional
* **Banner Multi-Bahasa**: Banner pemberitahuan bahasa kustom di bagian paling atas halaman yang mengarahkan ke preferensi Bahasa Indonesia.
* **Menu Dropdown Interaktif**: Menu navigasi dinamis (Products, Solutions, Resources, Developers) yang menampilkan sub-layanan Notion AI lengkap dengan animasi transisi yang mulus.

### 2. Panel Hero & Simulator Shift Malam (Night Shift Simulation)
* **Visual Ramp HQ Workspace**: Representasi bersih dari halaman dasbor tim di Notion dengan daftar agenda terjadwal serta indikator status agen penanggung jawab.
* **Interactive Night Shift Toggle**: Tombol sakelar malam hari yang jika diaktifkan akan mengubah tema workspace menjadi lebih gelap dan menyalakan konsol log simulasi agen (Q&A Agent, Task Router, Reporting Agent) yang memproses antrean tugas secara real-time.

### 3. Ticker Infinit Brand Korporasi (Infinite Logo Marquee)
* Carousel berjalan horizontal tanpa akhir (*infinite CSS marquee*) yang mengagregasikan logo mitra tepercaya global (seperti OpenAI, Figma, Cursor, Vercel, NVIDIA, Volvo, L'Oreal, dan Discord) untuk memvalidasi kredibilitas produk.

### 4. Pusat Kontrol Agen & Playground Obet (Keep Work Moving)
* **Tab Switcher Kategori Agen**: Memilih jenis agen fungsional secara instan (Q&A, Task Routing, Reporting, atau Custom Playground).
* **Simulasi Chat Real-time**: Pengguna dapat mengirim pesan manual atau mengklik daftar pertanyaan rekomendasi yang langsung dijawab secara responsif lengkap dengan penunjuk penulisan pesan/animasi proses (*thinking loader*).

### 5. Mesin Draft Dokumen Otomatis (On-Demand Assistants)
* **Workspace Penulisan Cepat**: Sistem penulisan markdown otomatis simulasi Notion Writer yang mengetik artikel atau laporan analisis sentimen per kata sesuai dengan tugas terpilih.
* **Indikator Langkah Pemrosesan**: Menampilkan baris proses pelacakan tugas (Retrieving, Scanning, Formulating, Publishing) yang berubah status menjadi berhasil secara bertahap saat pembuatan dokumen berlangsung.

### 6. Pencarian Terintegrasi & Notula Rapat (Enterprise Search & AI Notes)
* **Pencarian Real-time**: Input pencarian dinamis yang menyaring artikel atau dokumen terindeks dari berbagai sumber seperti Google Drive, Slack, JIRA, dan Notion secara instan.
* **Asisten Ringkasan Rapat**: Widget notula rapat ( Joyce & Sam weekly 1:1) dilengkapi selektor tab (Summary, Notes, Transcript), kontrol pemutaran visual audio simulasi, dan daftar tugas (*Action Items*) interaktif yang dapat dicentang langsung oleh pengguna.

### 7. Kolokasi Dokumen & Basis Pengetahuan (Docs & Knowledge Base)
* **Sistem Komentar Dinamis**: Dasbor pembuatan revisi dokumen di mana pengguna dapat menambahkan umpan balik atau berinteraksi langsung melalui forum diskusi tersemat secara live.
* **Indeks Folder Company HQ**: Struktur hierarki panduan SOP perusahaan yang tertata rapi di samping widget status kesiapan bot kerja.

### 8. Papan Proyek & Garis Waktu Milestone (Projects & Timeline)
* **Visual Kanban Checklist**: Papan rilis final QA yang menunjukkan daftar tiket prioritas, form penambahan tugas kustom baru, dan kalkulator persentase kemajuan penyelesaian proyek otomatis.
* **Garis Waktu Milestone**: Peta jalan skema perilisan produk (milestone) dengan penanda nomor berurutan yang elegan.

---

# Teknologi yang Digunakan (Tech Stack)

* **React 19**: Pembangunan komponen UI berbasis fungsi secara deklaratif dan berorientasi performa tinggi.
* **Vite 6**: Bundler aplikasi ultra-cepat dengan optimasi struktur modern.
* **TypeScript 5**: Menjamin keamanan tipe (*type-safety*) dan kemudahan pemeliharaan kode.
* **Tailwind CSS v4 & @tailwindcss/vite**: Sistem penataan gaya utilitas penuh (*utility-first*) yang responsif dengan performa rendering optimal.
* **Framer Motion (`motion/react`)**: Menggerakkan transisi mikro-interaksi, pergantian tab, dan log masuk terminal secara halus.
* **Lucide React**: Koleksi ikon SVG modern beresolusi tinggi yang digunakan secara konsisten di seluruh bagian halaman.

---

# Cara Menjalankan Sandbox Secara Lokal

1. Kloning repositori ini:
